# Analytics Setup Documentation

## Конфигурация

Все ключи аналитики настроены в `.env.local`:

```bash
# Analytics Configuration
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-KFKPR6DVQ1
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-16789054872
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=PTjFCI6Kjc4aEJmgtZMo

# GTM Configuration
NEXT_PUBLIC_GTM_ID=GTM-5226HZBT

# SEO & Verification
NEXT_PUBLIC_GOOGLE_VERIFICATION=lkJKzKac46dhgESju5LehvhlsdIhik_unV8Pp68VlRk
```

## Компоненты

### 1. Analytics Component (`/src/components/analytics.tsx`)
- Загружает Google Analytics, GTM и Google Ads
- Автоматически включается в корневой layout
- Поддерживает NoScript fallback для GTM

### 2. useAnalytics Hook (`/src/hooks/useAnalytics.ts`)
Предоставляет функции для отслеживания:

```typescript
const { 
  trackEvent, 
  trackContactSubmission, 
  trackProjectView,
  trackServiceInterest,
  trackPricingView,
  trackFAQInteraction 
} = useAnalytics()
```

### 3. CTAButton с аналитикой
```jsx
<CTAButton 
  href="/contact"
  trackingAction="cta_click"
  trackingCategory="navigation"
>
  Contactez-nous
</CTAButton>
```

## Отслеживаемые события

### Автоматические:
- ✅ Просмотры страниц (GA)
- ✅ Отправка форм контактов (конверсии Google Ads)
- ✅ Клики по внешним ссылкам

### Доступные для добавления:
- `trackProjectView(projectName)` - просмотр проекта
- `trackServiceInterest(serviceName)` - интерес к услуге  
- `trackPricingView(planName)` - просмотр тарифа
- `trackFAQInteraction(question)` - взаимодействие с FAQ
- `trackDownload(fileName)` - скачивание файла

## Интеграция с Google Ads

Конверсии отслеживаются автоматически при:
- Успешной отправке формы контакта
- Можно добавить дополнительные точки конверсии

## Верификация Google

Google Search Console верификация добавлена в метаданные:
```typescript
verification: {
  google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
}
```

## Проверка работы

1. Откройте DevTools → Network 
2. Найдите запросы к:
   - `googletagmanager.com/gtag/js` (GA)
   - `googletagmanager.com/gtm.js` (GTM)
3. В Console проверьте наличие `dataLayer`

## Производительность

- Все скрипты загружаются с `strategy="afterInteractive"`
- GTM включает NoScript fallback
- TypeScript типизация для `window.gtag`
