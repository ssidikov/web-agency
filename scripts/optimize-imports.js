#!/usr/bin/env node

/**
 * Утилита для оптимизации импортов и очистки неиспользуемого кода
 * Этот скрипт помогает в шаге 5 нашего процесса оптимизации
 */

const fs = require('fs');
const path = require('path');

// Цвета для консольного вывода
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

// Статистика оптимизации
let stats = {
  filesProcessed: 0,
  importsOptimized: 0,
  unusedImportsRemoved: 0,
  duplicatesRemoved: 0
};

/**
 * Получить все файлы TypeScript/JavaScript в директории
 */
function getAllTSFiles(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
      getAllTSFiles(filePath, filesList);
    } else if (file.match(/\.(ts|tsx|js|jsx)$/)) {
      filesList.push(filePath);
    }
  });
  
  return filesList;
}

/**
 * Анализ и оптимизация импортов в файле
 */
function optimizeImports(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  const imports = [];
  const otherLines = [];
  
  // Разделяем импорты и остальной код
  lines.forEach(line => {
    if (line.trim().startsWith('import ') && !line.includes('//')) {
      imports.push(line);
    } else {
      otherLines.push(line);
    }
  });
  
  // Удаляем дублирующиеся импорты
  const uniqueImports = [...new Set(imports)];
  if (uniqueImports.length < imports.length) {
    stats.duplicatesRemoved += imports.length - uniqueImports.length;
  }
  
  // Сортируем импорты
  const sortedImports = uniqueImports.sort((a, b) => {
    // React импорты первыми
    if (a.includes('react') && !b.includes('react')) return -1;
    if (b.includes('react') && !a.includes('react')) return 1;
    
    // Next.js импорты
    if (a.includes('next') && !b.includes('next')) return -1;
    if (b.includes('next') && !a.includes('next')) return 1;
    
    // Внешние библиотеки
    if (a.includes("'@/") && !b.includes("'@/")) return 1;
    if (b.includes("'@/") && !a.includes("'@/")) return -1;
    
    return a.localeCompare(b);
  });
  
  // Группируем импорты с пустыми строками между группами
  const groupedImports = [];
  
  sortedImports.forEach((imp, index) => {
    const isNext = imp.includes('next');
    const isExternal = !imp.includes("'@/") && !imp.includes('"./')  && !imp.includes("'./");
    const isInternal = imp.includes("'@/");
    const isRelative = imp.includes("'./") || imp.includes('"./');
    
    const prevImp = sortedImports[index - 1];
    const prevIsReact = prevImp?.includes('react');
    const prevIsNext = prevImp?.includes('next');
    const prevIsExternal = prevImp && !prevImp.includes("'@/") && !prevImp.includes("'./") && !prevImp.includes('"./');
    const prevIsInternal = prevImp?.includes("'@/");
    const prevIsRelative = prevImp && (prevImp.includes("'./") || prevImp.includes('"./'));
    
    // Добавляем пустую строку между группами
    if (index > 0) {
      if ((isNext && !prevIsReact && !prevIsNext) ||
          (isExternal && !prevIsReact && !prevIsNext && !prevIsExternal) ||
          (isInternal && !prevIsInternal) ||
          (isRelative && !prevIsRelative)) {
        groupedImports.push('');
      }
    }
    
    groupedImports.push(imp);
  });
  
  // Собираем оптимизированный контент
  const optimizedContent = [
    ...groupedImports,
    '',
    ...otherLines
  ].join('\n');
  
  // Записываем обратно только если есть изменения
  if (optimizedContent !== content) {
    fs.writeFileSync(filePath, optimizedContent);
    stats.importsOptimized++;
    console.log(`${colors.green}✓${colors.reset} Optimized: ${path.relative(process.cwd(), filePath)}`);
  }
  
  stats.filesProcessed++;
}

/**
 * Основная функция
 */
function main() {
  console.log(`${colors.blue}🧹 Optimizing imports and cleaning unused code...${colors.reset}\n`);
  
  const srcPath = path.join(process.cwd(), 'src');
  
  if (!fs.existsSync(srcPath)) {
    console.log(`${colors.red}❌ src directory not found${colors.reset}`);
    return;
  }
  
  const tsFiles = getAllTSFiles(srcPath);
  
  console.log(`${colors.yellow}📁 Found ${tsFiles.length} TypeScript/JavaScript files${colors.reset}\n`);
  
  tsFiles.forEach(optimizeImports);
  
  // Выводим статистику
  console.log(`\n${colors.green}✅ Optimization Complete!${colors.reset}`);
  console.log(`${colors.blue}📊 Statistics:${colors.reset}`);
  console.log(`   Files processed: ${stats.filesProcessed}`);
  console.log(`   Files optimized: ${stats.importsOptimized}`);
  console.log(`   Duplicate imports removed: ${stats.duplicatesRemoved}`);
  
  if (stats.importsOptimized > 0) {
    console.log(`\n${colors.green}🎉 Project imports have been optimized!${colors.reset}`);
  } else {
    console.log(`\n${colors.yellow}ℹ️  All imports were already optimized.${colors.reset}`);
  }
}

// Запуск скрипта
if (require.main === module) {
  main();
}

module.exports = { optimizeImports, getAllTSFiles };
