// Types for template parameters
interface UserConfirmationParams {
  name: string
  locale?: 'fr' | 'en' | 'ru'
}

interface AdminNotificationParams {
  name: string
  email: string
  message: string
  locale?: 'fr' | 'en' | 'ru'
}

// Translations for email templates
const translations = {
  fr: {
    greeting: 'Bonjour',
    userSubject: 'Confirmation de votre demande',
    userMessage:
      'Nous avons bien reçu votre demande.<br>Notre équipe vous contactera prochainement pour en discuter.',
    regards: "Cordialement,<br>L'équipe Sidikoff",
    adminSubject: 'Nouvelle demande reçue',
    newRequest: 'Nouvelle demande reçue',
    nameLabel: 'Nom',
    emailLabel: 'Email',
    messageLabel: 'Message',
    autoNotification: 'Notification automatique Sidikoff',
    thankYou: 'Merci pour votre confiance',
    quickResponse: 'Réponse sous 24h garantie',
    professionalService: 'Service professionnel',
  },
  en: {
    greeting: 'Hello',
    userSubject: 'Confirmation of your request',
    userMessage:
      'We have received your request.<br>Our team will contact you shortly to discuss it.',
    regards: 'Best regards,<br>The Sidikoff team',
    adminSubject: 'New request received',
    newRequest: 'New request received',
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    autoNotification: 'Sidikoff automatic notification',
    thankYou: 'Thank you for your trust',
    quickResponse: '24h response guaranteed',
    professionalService: 'Professional service',
  },
  ru: {
    greeting: 'Здравствуйте',
    userSubject: 'Подтверждение вашего запроса',
    userMessage:
      'Мы получили ваш запрос.<br>Наша команда свяжется с вами в ближайшее время для обсуждения.',
    regards: 'С уважением,<br>Команда Sidikoff',
    adminSubject: 'Получен новый запрос',
    newRequest: 'Получен новый запрос',
    nameLabel: 'Имя',
    emailLabel: 'Email',
    messageLabel: 'Сообщение',
    autoNotification: 'Автоматическое уведомление Sidikoff',
    thankYou: 'Благодарим за доверие',
    quickResponse: 'Ответ в течение 24ч',
    professionalService: 'Профессиональный сервис',
  },
}

// Base email styles
const baseStyles = `
  <style>
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; margin: 0 !important; }
      .content { padding: 20px !important; }
      .header { padding: 24px 20px !important; }
      .footer { padding: 16px !important; }
      .logo { height: 36px !important; }
      .title { font-size: 24px !important; }
      .subtitle { font-size: 18px !important; }
    }
    @media (prefers-color-scheme: dark) {
      .dark-bg { background: #1a1a1a !important; }
      .dark-text { color: #ffffff !important; }
    }
  </style>
`

export const userConfirmationFR = ({ name, locale = 'fr' }: UserConfirmationParams) => {
  const t = translations[locale]

  return `
    <!DOCTYPE html>
    <html lang="${locale}">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="color-scheme" content="light dark">
      <title>${t.userSubject}</title>
      ${baseStyles}
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh;">
      
      <!-- Main Container -->
      <table class="container" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); overflow: hidden;">
        
        <!-- Header with Gradient -->
        <tr>
          <td class="header" style="background: linear-gradient(135deg, #3F72AF 0%, #112D4E 100%); padding: 48px 32px; text-align: center; position: relative;">
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.2"/><circle cx="20" cy="80" r="0.5" fill="white" opacity="0.2"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>'); opacity: 0.3;"></div>
            <div style="position: relative; z-index: 1;">
              <img src="https://sidikoff.com/logo-sidikoff.webp" alt="Sidikoff Digital" class="logo" style="height: 48px; margin-bottom: 16px; filter: brightness(0) invert(1);">
              <h1 class="title" style="color: #ffffff; font-size: 32px; font-weight: 700; margin: 0; letter-spacing: -0.5px;">SIDIKOFF DIGITAL</h1>
              <p style="color: rgba(255,255,255,0.9); font-size: 16px; margin: 8px 0 0 0; font-weight: 400;">Digital Innovation & Design</p>
            </div>
          </td>
        </tr>

        <!-- Success Icon -->
        <tr>
          <td style="padding: 0; text-align: center; transform: translateY(-20px);">
            <div style="display: inline-block; background: linear-gradient(135deg, #4CAF50, #45a049); width: 60px; height: 60px; border-radius: 50%; box-shadow: 0 8px 30px rgba(76, 175, 80, 0.3);">
              <svg width="60" height="60" viewBox="0 0 60 60" style="padding: 18px;">
                <path d="M14 30l8 8 16-16" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
        </td>
      </tr>

        <!-- Main Content -->
        <tr>
          <td class="content" style="padding: 24px 48px 40px 48px;">
            <h2 class="subtitle" style="color: #3F72AF; font-size: 24px; font-weight: 600; margin: 0 0 24px 0; text-align: center;">${t.greeting} ${name}! 👋</h2>
            
            <div style="background: linear-gradient(135deg, #f8faff 0%, #e3f2fd 100%); padding: 32px; border-radius: 16px; margin-bottom: 32px; border-left: 4px solid #3F72AF;">
              <p style="margin: 0; font-size: 18px; line-height: 1.6; color: #2c3e50; text-align: center;">
                ${t.userMessage}
              </p>
            </div>

            <!-- Features Grid -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px; margin: 32px 0;">
              <div style="text-align: center; padding: 20px; background: white; border: 2px solid #f0f8ff; border-radius: 12px; box-shadow: 0 4px 15px rgba(63, 114, 175, 0.08);">
                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #3F72AF, #112D4E); border-radius: 50%; margin: 0 auto 12px; display: flex; align-items: center; justify-content: center;">
                  <span style="color: white; font-size: 18px;">✓</span>
                </div>
                <p style="margin: 0; font-size: 14px; color: #3F72AF; font-weight: 600;">${t.thankYou}</p>
              </div>
              <div style="text-align: center; padding: 20px; background: white; border: 2px solid #f0f8ff; border-radius: 12px; box-shadow: 0 4px 15px rgba(63, 114, 175, 0.08);">
                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #4CAF50, #45a049); border-radius: 50%; margin: 0 auto 12px; display: flex; align-items: center; justify-content: center;">
                  <span style="color: white; font-size: 18px;">⚡</span>
                </div>
                <p style="margin: 0; font-size: 14px; color: #3F72AF; font-weight: 600;">${t.quickResponse}</p>
              </div>
              <div style="text-align: center; padding: 20px; background: white; border: 2px solid #f0f8ff; border-radius: 12px; box-shadow: 0 4px 15px rgba(63, 114, 175, 0.08);">
                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #FF6B6B, #EE5A24); border-radius: 50%; margin: 0 auto 12px; display: flex; align-items: center; justify-content: center;">
                  <span style="color: white; font-size: 18px;">🏆</span>
                </div>
                <p style="margin: 0; font-size: 14px; color: #3F72AF; font-weight: 600;">${t.professionalService}</p>
              </div>
            </div>

            <!-- Signature -->
            <div style="margin-top: 40px; padding-top: 24px; border-top: 2px solid #f8faff;">
              <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #2c3e50;">
                ${t.regards}
              </p>
            </div>
        </td>
      </tr>

        <!-- Footer -->
        <tr>
          <td class="footer" style="background: linear-gradient(135deg, #DBE2EF 0%, #f8faff 100%); padding: 32px; text-align: center;">
            <div style="margin-bottom: 16px;">
              <a href="https://sidikoff.com" style="display: inline-block; background: linear-gradient(135deg, #3F72AF, #112D4E); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; font-size: 14px; box-shadow: 0 4px 15px rgba(63, 114, 175, 0.3); transition: all 0.3s ease;">
                Visiter notre site web
              </a>
            </div>
            <p style="margin: 0; font-size: 14px; color: #3F72AF; font-weight: 500;">
              <a href="https://sidikoff.com" style="color: #3F72AF; text-decoration: none; font-weight: 700;">SIDIKOFF DIGITAL</a>
            </p>
            <p style="margin: 8px 0 0 0; font-size: 12px; color: #7f8c8d;">
              Professional Digital Solutions • Paris, France
            </p>
        </td>
      </tr>
    </table>
    </body>
    </html>
`
}

export const adminNotificationFR = ({
  name,
  email,
  message,
  locale = 'fr',
}: AdminNotificationParams) => {
  const t = translations[locale]

  return `
    <!DOCTYPE html>
    <html lang="${locale}">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="color-scheme" content="light dark">
      <title>${t.adminSubject}</title>
      ${baseStyles}
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh;">
      
      <!-- Main Container -->
      <table class="container" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); overflow: hidden;">
        
        <!-- Header with Gradient -->
        <tr>
          <td class="header" style="background: linear-gradient(135deg, #FF6B6B 0%, #EE5A24 100%); padding: 48px 32px; text-align: center; position: relative;">
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.2"/><circle cx="20" cy="80" r="0.5" fill="white" opacity="0.2"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>'); opacity: 0.3;"></div>
            <div style="position: relative; z-index: 1;">
              <div style="display: inline-block; background: rgba(255,255,255,0.2); padding: 16px; border-radius: 50%; margin-bottom: 16px;">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="white">
                  <path d="M16 2L3 9l13 7 13-7-13-7zM3 23l13 7 13-7M3 16l13 7 13-7" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h1 class="title" style="color: #ffffff; font-size: 28px; font-weight: 700; margin: 0; letter-spacing: -0.5px;">${
                t.newRequest
              }</h1>
              <p style="color: rgba(255,255,255,0.9); font-size: 16px; margin: 8px 0 0 0; font-weight: 400;">Admin Notification</p>
            </div>
          </td>
        </tr>

        <!-- Alert Icon -->
        <tr>
          <td style="padding: 0; text-align: center; transform: translateY(-20px);">
            <div style="display: inline-block; background: linear-gradient(135deg, #FF6B6B, #EE5A24); width: 60px; height: 60px; border-radius: 50%; box-shadow: 0 8px 30px rgba(255, 107, 107, 0.3);">
              <svg width="60" height="60" viewBox="0 0 60 60" style="padding: 18px;">
                <path d="M30 8v16M30 32h.01" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="30" cy="30" r="20" stroke="white" stroke-width="3" fill="none"/>
              </svg>
            </div>
        </td>
      </tr>

        <!-- Main Content -->
        <tr>
          <td class="content" style="padding: 24px 48px 40px 48px;">
            <h2 class="subtitle" style="color: #FF6B6B; font-size: 24px; font-weight: 600; margin: 0 0 32px 0; text-align: center;">📧 ${
              t.newRequest
            }</h2>
            
            <!-- Contact Information -->
            <div style="background: linear-gradient(135deg, #fff5f5 0%, #ffe0e0 100%); padding: 32px; border-radius: 16px; margin-bottom: 24px; border-left: 4px solid #FF6B6B;">
              
              <!-- Name -->
              <div style="margin-bottom: 20px; display: table; width: 100%;">
                <div style="display: table-cell; width: 80px; vertical-align: top; padding-right: 16px;">
                  <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #3F72AF, #112D4E); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                    <span style="color: white; font-size: 16px;">👤</span>
                  </div>
                </div>
                <div style="display: table-cell; vertical-align: top;">
                  <p style="margin: 0 0 4px 0; font-size: 14px; color: #666; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">${
                    t.nameLabel
                  }</p>
                  <p style="margin: 0; font-size: 18px; color: #2c3e50; font-weight: 600;">${name}</p>
                </div>
              </div>

              <!-- Email -->
              <div style="margin-bottom: 20px; display: table; width: 100%;">
                <div style="display: table-cell; width: 80px; vertical-align: top; padding-right: 16px;">
                  <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #4CAF50, #45a049); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                    <span style="color: white; font-size: 16px;">✉️</span>
                  </div>
                </div>
                <div style="display: table-cell; vertical-align: top;">
                  <p style="margin: 0 0 4px 0; font-size: 14px; color: #666; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">${
                    t.emailLabel
                  }</p>
                  <p style="margin: 0; font-size: 16px;">
                    <a href="mailto:${email}" style="color: #3F72AF; text-decoration: none; font-weight: 600; background: rgba(63, 114, 175, 0.1); padding: 6px 12px; border-radius: 6px; display: inline-block;">${email}</a>
                  </p>
                </div>
              </div>

              <!-- Message -->
              <div style="display: table; width: 100%;">
                <div style="display: table-cell; width: 80px; vertical-align: top; padding-right: 16px;">
                  <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #9b59b6, #74b9ff); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                    <span style="color: white; font-size: 16px;">💬</span>
                  </div>
                </div>
                <div style="display: table-cell; vertical-align: top;">
                  <p style="margin: 0 0 12px 0; font-size: 14px; color: #666; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">${
                    t.messageLabel
                  }</p>
                  <div style="background: white; padding: 24px; border-radius: 12px; border: 2px solid #f8f9fa; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                    <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #2c3e50; white-space: pre-wrap;">${message}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Actions -->
            <div style="text-align: center; margin-top: 32px;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #3F72AF, #112D4E); color: white; padding: 14px 28px; border-radius: 25px; text-decoration: none; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(63, 114, 175, 0.3); margin-right: 12px;">
                Répondre par email
              </a>
              <a href="tel:${email}" style="display: inline-block; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 14px 28px; border-radius: 25px; text-decoration: none; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);">
                Appeler
              </a>
            </div>
        </td>
      </tr>

        <!-- Footer -->
        <tr>
          <td class="footer" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 32px; text-align: center;">
            <p style="margin: 0 0 8px 0; font-size: 14px; color: #666; font-weight: 600;">
              ${t.autoNotification}
            </p>
            <p style="margin: 0; font-size: 14px; color: #3F72AF; font-weight: 500;">
              <a href="https://sidikoff.com" style="color: #3F72AF; text-decoration: none; font-weight: 700;">SIDIKOFF DIGITAL</a>
            </p>
            <p style="margin: 8px 0 0 0; font-size: 12px; color: #7f8c8d;">
              ${new Date().toLocaleDateString(
                locale === 'fr' ? 'fr-FR' : locale === 'ru' ? 'ru-RU' : 'en-US'
              )} • ${new Date().toLocaleTimeString(
    locale === 'fr' ? 'fr-FR' : locale === 'ru' ? 'ru-RU' : 'en-US'
  )}
            </p>
        </td>
      </tr>
    </table>
    </body>
    </html>
  `
}

// Export specific language templates for backward compatibility
export const userConfirmationEN = (params: UserConfirmationParams) =>
  userConfirmationFR({ ...params, locale: 'en' })

export const userConfirmationRU = (params: UserConfirmationParams) =>
  userConfirmationFR({ ...params, locale: 'ru' })

export const adminNotificationEN = (params: AdminNotificationParams) =>
  adminNotificationFR({ ...params, locale: 'en' })

export const adminNotificationRU = (params: AdminNotificationParams) =>
  adminNotificationFR({ ...params, locale: 'ru' })
