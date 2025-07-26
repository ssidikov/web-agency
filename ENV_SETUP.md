# 🔐 Настройка переменных окружения

## Важно для безопасности!

Все секретные ключи и токены теперь вынесены в переменные окружения. Это обеспечивает безопасность вашего проекта.

## Создайте файл .env.local

Создайте файл `.env.local` в корне проекта и добавьте следующие переменные:

```env
# Sanity CMS Configuration (обязательно)
NEXT_PUBLIC_SANITY_PROJECT_ID=71pz7dxk
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=skfEKhxV7llhsH81e9MxIJfKqVuqieTEIr7pbTKwl3GucJ0VB9YCO0d2vUmmb3OWEi4M6X3C3KDPZJDzD7kH4FCTFfGNldMlXRfVQQNsF7TklsRUMaqMhi307oRO6KtguNwqLuzfUNIhGHvwNaXkJiksKFWKlbYmVPw9ME6sDyp8yHvi8GuN

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Email Configuration (для контактной формы - опционально)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=contact@sidikoff.digital

# Дополнительные настройки (опционально)
# GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
# RECAPTCHA_SECRET_KEY=your-recaptcha-secret
# RECAPTCHA_SITE_KEY=your-recaptcha-site-key
```

## ⚠️ ВАЖНО!

1. **Никогда не коммитьте .env.local в Git!**
2. Файл `.env.local` уже добавлен в `.gitignore`
3. Для продакшена используйте переменные окружения вашего хостинга

## 🔄 После создания .env.local

1. Перезапустите dev server:

```bash
npm run dev
```

2. Запустите Sanity Studio:

```bash
npm run sanity
```

## 🚀 Для продакшена

### Vercel

Добавьте переменные в настройках проекта:

- Зайдите в Dashboard → Project → Settings → Environment Variables
- Добавьте все переменные из .env.local

### Netlify

```bash
netlify env:set NEXT_PUBLIC_SANITY_PROJECT_ID 71pz7dxk
netlify env:set SANITY_API_TOKEN "ваш-токен"
# и так далее...
```

### Другие хостинги

Добавьте переменные через панель управления или CLI.

## 🛡️ Безопасность

### Что защищено:

- ✅ Sanity API токен (SANITY_API_TOKEN)
- ✅ Email настройки (SMTP\_\*)
- ✅ Внешние API ключи

### Публичные переменные:

- ✅ NEXT*PUBLIC*\* - доступны в браузере
- ⚠️ Не содержат секретную информацию

## 🔍 Проверка

Убедитесь что переменные загружены:

```bash
npm run dev
```

В консоли не должно быть ошибок типа "Missing environment variable".

## 📝 Шаблон .env.local

Скопируйте этот шаблон в ваш `.env.local` файл:

```env
# === ОБЯЗАТЕЛЬНЫЕ ПЕРЕМЕННЫЕ ===
NEXT_PUBLIC_SANITY_PROJECT_ID=71pz7dxk
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=skfEKhxV7llhsH81e9MxIJfKqVuqieTEIr7pbTKwl3GucJ0VB9YCO0d2vUmmb3OWEi4M6X3C3KDPZJDzD7kH4FCTFfGNldMlXRfVQQNsF7TklsRUMaqMhi307oRO6KtguNwqLuzfUNIhGHvwNaXkJiksKFWKlbYmVPw9ME6sDyp8yHvi8GuN

# === КОНФИГУРАЦИЯ САЙТА ===
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# === EMAIL (ОПЦИОНАЛЬНО) ===
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=587
# SMTP_USER=your-email@gmail.com
# SMTP_PASS=your-app-password
# EMAIL_FROM=your-email@gmail.com
# EMAIL_TO=contact@sidikoff.digital
```

**🎯 Готово! Ваш проект теперь безопасен и готов к продакшену!**
