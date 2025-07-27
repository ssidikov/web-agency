#!/usr/bin/env node

/**
 * Improved Import Optimizer - исправленная версия
 * Правильно обрабатывает многострочные импорты и 'use client'
 */

const fs = require('fs');
const path = require('path');

// Цвета для консоли
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

/**
 * Проанализировать и очистить импорты в файле
 */
function fixImports(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  let useClientDirective = '';
  let imports = [];
  let restOfCode = [];
  let inImport = false;
  let currentImport = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();
    
    // Сохраняем 'use client' директиву
    if (trimmedLine === "'use client'" || trimmedLine === '"use client"') {
      useClientDirective = line;
      continue;
    }
    
    // Начало импорта
    if (trimmedLine.startsWith('import ') && !inImport) {
      inImport = true;
      currentImport = line;
      
      // Проверяем, завершается ли импорт на этой строке
      if (line.includes(' from ') && !line.endsWith(',') && !line.includes('{')) {
        imports.push(currentImport);
        inImport = false;
        currentImport = '';
      }
      continue;
    }
    
    // Продолжение многострочного импорта
    if (inImport) {
      currentImport += '\n' + line;
      
      // Конец импорта
      if (line.includes(' from ') || line.endsWith('}')) {
        imports.push(currentImport);
        inImport = false;
        currentImport = '';
      }
      continue;
    }
    
    // Если не импорт и не в процессе импорта
    if (!inImport) {
      restOfCode.push(line);
    }
  }
  
  // Убираем дубликаты
  const uniqueImports = [...new Set(imports)];
  
  // Сортируем импорты
  const sortedImports = uniqueImports.sort((a, b) => {
    const aIsReact = a.includes('react');
    const bIsReact = b.includes('react');
    const aIsNext = a.includes('next');
    const bIsNext = b.includes('next');
    const aIsExternal = !a.includes("'@/") && !a.includes("'./") && !a.includes('"./')  && !a.includes('"@/');
    const bIsExternal = !b.includes("'@/") && !b.includes("'./") && !b.includes('"./')  && !b.includes('"@/');
    const aIsInternal = a.includes("'@/") || a.includes('"@/');
    const bIsInternal = b.includes("'@/") || b.includes('"@/');
    
    // React импорты первыми
    if (aIsReact && !bIsReact) return -1;
    if (bIsReact && !aIsReact) return 1;
    
    // Next.js импорты
    if (aIsNext && !bIsNext) return -1;
    if (bIsNext && !aIsNext) return 1;
    
    // Внешние библиотеки
    if (aIsExternal && !bIsExternal) return -1;
    if (bIsExternal && !aIsExternal) return 1;
    
    // Внутренние импорты
    if (aIsInternal && !bIsInternal) return -1;
    if (bIsInternal && !aIsInternal) return 1;
    
    return a.localeCompare(b);
  });
  
  // Группируем импорты с пустыми строками
  const groupedImports = [];
  let lastGroup = '';
  
  sortedImports.forEach((imp, index) => {
    const isReact = imp.includes('react');
    const isNext = imp.includes('next');
    const isExternal = !imp.includes("'@/") && !imp.includes("'./") && !imp.includes('"./')  && !imp.includes('"@/');
    const isInternal = imp.includes("'@/") || imp.includes('"@/');
    const isRelative = imp.includes("'./") || imp.includes('"./');
    
    let currentGroup = '';
    if (isReact) currentGroup = 'react';
    else if (isNext) currentGroup = 'next';
    else if (isExternal) currentGroup = 'external';
    else if (isInternal) currentGroup = 'internal';
    else if (isRelative) currentGroup = 'relative';
    
    // Добавляем пустую строку между группами
    if (index > 0 && currentGroup !== lastGroup) {
      groupedImports.push('');
    }
    
    groupedImports.push(imp);
    lastGroup = currentGroup;
  });
  
  // Собираем финальный контент
  const finalContent = [
    useClientDirective,
    useClientDirective ? '' : null,
    ...groupedImports,
    groupedImports.length > 0 ? '' : null,
    ...restOfCode
  ].filter(line => line !== null).join('\n');
  
  // Записываем только если есть изменения
  if (finalContent !== content) {
    fs.writeFileSync(filePath, finalContent);
    console.log(`${colors.green}✓${colors.reset} Fixed: ${path.relative(process.cwd(), filePath)}`);
    return true;
  }
  
  return false;
}

/**
 * Получить все TS/JS файлы
 */
function getAllFiles(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
      getAllFiles(filePath, filesList);
    } else if (file.match(/\.(ts|tsx|js|jsx)$/)) {
      filesList.push(filePath);
    }
  });
  
  return filesList;
}

/**
 * Основная функция
 */
function main() {
  console.log(`${colors.blue}🔧 Fixing import syntax errors...${colors.reset}\n`);
  
  const srcPath = path.join(process.cwd(), 'src');
  
  if (!fs.existsSync(srcPath)) {
    console.log(`${colors.red}❌ src directory not found${colors.reset}`);
    return;
  }
  
  const files = getAllFiles(srcPath);
  let fixedCount = 0;
  
  files.forEach(file => {
    if (fixImports(file)) {
      fixedCount++;
    }
  });
  
  console.log(`\n${colors.green}✅ Import syntax fixed!${colors.reset}`);
  console.log(`${colors.blue}📊 Statistics:${colors.reset}`);
  console.log(`   Files processed: ${files.length}`);
  console.log(`   Files fixed: ${fixedCount}`);
  
  if (fixedCount > 0) {
    console.log(`\n${colors.green}🎉 All import syntax errors have been resolved!${colors.reset}`);
  } else {
    console.log(`\n${colors.yellow}ℹ️  No syntax errors found.${colors.reset}`);
  }
}

// Запуск
if (require.main === module) {
  main();
}

module.exports = { fixImports };
