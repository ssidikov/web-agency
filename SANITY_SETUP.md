# Настройка Sanity CMS для блога

## Обзор

Ваш веб-сайт теперь интегрирован с Sanity CMS для управления блогом. Это руководство поможет вам настроить схемы данных в Sanity Studio.

## Информация о проекте

- **Project ID**: `71pz7dxk`
- **Dataset**: `production`
- **Token**: Уже настроен в коде

## Необходимые схемы для Sanity Studio

Создайте следующие схемы в вашем Sanity проекте:

### 1. Схема категории блога (blogCategory.js)

```javascript
export default {
  name: 'blogCategory',
  title: 'Blog Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Hex color code (e.g., #3F72AF)',
      validation: (Rule) =>
        Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
          name: 'hex',
          invert: false,
        }).error('Please enter a valid hex color'),
    },
  ],
  preview: {
    select: {
      title: 'title',
      color: 'color',
    },
    prepare(selection) {
      const { title, color } = selection
      return {
        title: title,
        subtitle: color,
      }
    },
  },
}
```

### 2. Схема автора (author.js)

```javascript
export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
```

### 3. Схема блог поста (blogPost.js)

```javascript
export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
        },
      ],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'blogCategory' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Short description of the blog post',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: (Rule) => Rule.max(60),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          validation: (Rule) => Rule.max(160),
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            layout: 'tags',
          },
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
```

### 4. Схема блочного контента (blockContent.js)

```javascript
export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    },
  ],
}
```

## Как добавить схемы в Sanity Studio

1. Войдите в ваш Sanity Studio (`https://[your-project-id].sanity.studio/`)
2. Перейдите в раздел "Schema"
3. Создайте новые файлы для каждой схемы
4. Скопируйте код схем выше
5. Сохраните и опубликуйте изменения

## Создание контента

После настройки схем вы можете:

1. **Создать категории** - Начните с создания нескольких категорий блога
2. **Создать автора** - Создайте профиль автора "SIDIKOFF DIGITAL"
3. **Создать блог посты** - Добавьте ваши первые статьи

## Рекомендуемые категории

Предлагаем создать следующие категории для начала:

- **Web Development** (#3F72AF) - Веб-разработка
- **Design** (#9C27B0) - Дизайн
- **SEO** (#4CAF50) - SEO оптимизация
- **Business** (#FF9800) - Бизнес
- **Technology** (#2196F3) - Технологии

## Примеры контента

### Пример автора:

- **Name**: SIDIKOFF DIGITAL
- **Bio**: Команда опытных веб-разработчиков, специализирующаяся на создании современных веб-сайтов и цифровых решений.

### Пример блог поста:

- **Title**: "Топ 10 трендов веб-дизайна в 2024 году"
- **Category**: Design
- **Excerpt**: "Изучите последние тренды в веб-дизайне, которые будут доминировать в 2024 году..."
- **SEO Meta Title**: "Топ 10 трендов веб-дизайна 2024 | SIDIKOFF DIGITAL"
- **SEO Meta Description**: "Откройте для себя новейшие тренды веб-дизайна 2024 года. Экспертные советы от SIDIKOFF DIGITAL для современного веб-дизайна."

## Поддержка

Если у вас возникнут вопросы по настройке Sanity CMS, обратитесь к команде разработки.

## Возможности системы

- ✅ Многоязычная поддержка (EN, FR, RU)
- ✅ SEO оптимизация
- ✅ Фильтрация по категориям
- ✅ Адаптивный дизайн
- ✅ Быстрая загрузка
- ✅ Современный UI/UX
- ✅ CTA секции для конверсии
- ✅ Социальные кнопки
- ✅ Structured data для Google
