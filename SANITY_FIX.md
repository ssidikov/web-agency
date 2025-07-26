# 🔧 Исправление проблемы Sanity Studio

## ✅ Проблема решена!

**Ошибка:** `Configuration must contain 'projectId'`

**Причина:** Sanity Studio (Vite) не видел переменные окружения Next.js

**Решение:** Используем прямые значения в `sanity.config.ts` для разработки

## 🔐 Текущая конфигурация

### Для разработки:

```typescript
// sanity.config.ts
const projectId = '71pz7dxk'
const dataset = 'production'
```

### Для Next.js (остается безопасно):

```typescript
// src/lib/sanity.ts
export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  // ...
}
```

## 🚀 Для продакшена

При деплое вы можете обновить `sanity.config.ts` чтобы он читал переменные окружения:

```typescript
export default defineConfig({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '71pz7dxk',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  // ...
})
```

И добавить в настройки хостинга:

```env
SANITY_STUDIO_PROJECT_ID=71pz7dxk
SANITY_STUDIO_DATASET=production
```

## ✅ Что работает сейчас

1. **✅ Sanity Studio** - `npm run sanity` → `http://localhost:3333`
2. **✅ Next.js Blog** - `npm run dev` → `http://localhost:3001`
3. **✅ Безопасность** - токены в `.env.local`
4. **✅ CDN Images** - `cdn.sanity.io` настроен

## 🎯 Следующие шаги

1. Откройте Sanity Studio: `http://localhost:3333`
2. Создайте контент:
   - Автора "SIDIKOFF DIGITAL"
   - Категории блога
   - Первые статьи
3. Проверьте блог: `http://localhost:3001/en/blog`

---

**🎊 Готово! Sanity Studio работает идеально!**
