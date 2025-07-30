

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

// Enhanced email styles with modern glass effects
const baseStyles = `
  <style>
    /* Modern reset and base styles */
    * { box-sizing: border-box; }
    body { -webkit-text-size-adjust: none; -ms-text-size-adjust: none; }
    
    /* Glass morphism effects */
    .glass-card {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .glass-button {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .glass-button:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    }
    
    /* Enhanced gradients */
    .gradient-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #3F72AF 100%);
    }
    
    .gradient-success {
      background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
    }
    
    .gradient-alert {
      background: linear-gradient(135deg, #FF6B6B 0%, #ee5a24 50%, #ff4757 100%);
    }
    
    /* Modern shadows */
    .shadow-soft { box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1); }
    .shadow-medium { box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15); }
    .shadow-strong { box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2); }
    
    /* Advanced animations */
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      25% { transform: translateY(-8px) rotate(1deg); }
      50% { transform: translateY(-15px) rotate(0deg); }
      75% { transform: translateY(-8px) rotate(-1deg); }
    }
    
    @keyframes pulse {
      0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
      100% { transform: translate(-50%, -50%) scale(1.4); opacity: 0; }
    }
    
    @keyframes shimmer {
      0% { left: -100%; }
      100% { left: 100%; }
    }
    
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 20px rgba(63, 114, 175, 0.3); }
      50% { box-shadow: 0 0 40px rgba(63, 114, 175, 0.6), 0 0 60px rgba(63, 114, 175, 0.4); }
    }
    
    .floating { animation: float 3s ease-in-out infinite; }
    .shimmer { animation: shimmer 2s infinite; }
    .glow { animation: glow 2s ease-in-out infinite alternate; }
    
    /* Responsive design */
    @media only screen and (max-width: 600px) {
      .container { 
        width: 95% !important; 
        margin: 10px auto !important; 
        border-radius: 16px !important;
      }
      .content { 
        padding: 24px 20px !important; 
      }
      .header { 
        padding: 32px 20px !important; 
        border-radius: 16px 16px 0 0 !important;
      }
      .footer { 
        padding: 24px 16px !important; 
      }
      .logo { 
        height: 36px !important; 
      }
      .title { 
        font-size: 22px !important; 
        line-height: 1.3 !important;
      }
      .subtitle { 
        font-size: 18px !important; 
        line-height: 1.4 !important;
      }
      .feature-grid {
        grid-template-columns: 1fr !important;
        gap: 12px !important;
      }
      .button-group {
        flex-direction: column !important;
        gap: 12px !important;
      }
      .button-group a {
        margin: 0 !important;
        width: 100% !important;
        text-align: center !important;
        justify-content: center !important;
      }
      /* Mobile-optimized glass effects */
      .glass-card {
        backdrop-filter: blur(10px) !important;
        -webkit-backdrop-filter: blur(10px) !important;
      }
    }
    
    /* Tablet optimization */
    @media only screen and (min-width: 601px) and (max-width: 1024px) {
      .container { 
        width: 90% !important; 
        margin: 20px auto !important; 
      }
      .content { 
        padding: 28px 32px !important; 
      }
      .header { 
        padding: 40px 28px !important; 
      }
    }
    
    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      .container { 
        background: rgba(26, 26, 26, 0.95) !important; 
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
      }
      .glass-card { 
        background: rgba(26, 26, 26, 0.9) !important; 
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        color: #ffffff !important;
      }
      .dark-text { 
        color: #ffffff !important; 
      }
      .dark-text-secondary { 
        color: #b0b0b0 !important; 
      }
      /* Dark mode button effects */
      .glass-button {
        background: rgba(255, 255, 255, 0.1) !important;
        border: 1px solid rgba(255, 255, 255, 0.2) !important;
      }
    }
    
    /* High contrast mode */
    @media (prefers-contrast: high) {
      .container { border: 3px solid #000 !important; }
      .glass-card { 
        background: #fff !important; 
        border: 2px solid #000 !important;
        backdrop-filter: none !important;
      }
      .glass-button { 
        border: 2px solid #000 !important;
        backdrop-filter: none !important;
      }
      /* High contrast text */
      p, h1, h2, h3 { color: #000 !important; }
      a { color: #0066cc !important; text-decoration: underline !important; }
    }
    
    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { 
        animation-duration: 0.01ms !important; 
        animation-iteration-count: 1 !important; 
        transition-duration: 0.01ms !important; 
      }
      .floating { animation: none !important; }
      .shimmer { animation: none !important; }
      .glow { animation: none !important; }
    }
    
    /* Print styles */
    @media print {
      .container { 
        box-shadow: none !important; 
        border: 2px solid #000 !important;
        background: #fff !important;
      }
      .glass-card { 
        background: #fff !important; 
        border: 1px solid #ccc !important;
        backdrop-filter: none !important;
      }
      .header { background: #f5f5f5 !important; }
      a { color: #000 !important; text-decoration: underline !important; }
      /* Hide decorative elements in print */
      [style*="position: absolute"] { display: none !important; }
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
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #3F72AF 100%); min-height: 100vh; padding: 20px 0;">
      
      <!-- Animated background elements -->
      <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0;">
        <div style="position: absolute; top: 20%; left: 10%; width: 100px; height: 100px; background: rgba(255, 255, 255, 0.1); border-radius: 50%; animation: float 4s ease-in-out infinite;"></div>
        <div style="position: absolute; top: 60%; right: 15%; width: 60px; height: 60px; background: rgba(255, 255, 255, 0.08); border-radius: 50%; animation: float 3s ease-in-out infinite reverse;"></div>
        <div style="position: absolute; bottom: 30%; left: 20%; width: 80px; height: 80px; background: rgba(255, 255, 255, 0.06); border-radius: 50%; animation: float 5s ease-in-out infinite;"></div>
      </div>
      
      <!-- Main Container with enhanced glass effect -->
      <table class="container glass-card shadow-strong" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 40px auto; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(20px); border-radius: 24px; box-shadow: 0 30px 80px rgba(0,0,0,0.15); overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.2); position: relative; z-index: 1;">
        
        <!-- Enhanced Header with modern gradient and glass effects -->
        <tr>
          <td class="header gradient-primary" style="background: linear-gradient(135deg, #3F72AF 0%, #112D4E 50%, #1e3c72 100%); padding: 48px 32px; text-align: center; position: relative; overflow: hidden;">
            <!-- Subtle pattern overlay -->
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>'); opacity: 0.4;"></div>
            <!-- Gradient overlay for depth -->
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%);"></div>
            <div style="position: relative; z-index: 2;">
              <div class="floating" style="display: inline-block; margin-bottom: 16px;">
                <img src="https://sidikoff.com/logo-sidikoff.webp" alt="Sidikoff Digital" class="logo" style="height: 48px; filter: brightness(0) invert(1); drop-shadow: 0 4px 8px rgba(0,0,0,0.2);">
              </div>
              <h1 class="title" style="color: #ffffff; font-size: 32px; font-weight: 700; margin: 0; letter-spacing: -0.5px; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">SIDIKOFF DIGITAL</h1>
              <p style="color: rgba(255,255,255,0.9); font-size: 16px; margin: 8px 0 0 0; font-weight: 400; text-shadow: 0 1px 2px rgba(0,0,0,0.1);">Digital Innovation & Design</p>
            </div>
          </td>
        </tr>

        <!-- Enhanced Success Icon with glass effect -->
        <tr>
          <td style="padding: 0; text-align: center; transform: translateY(-30px);">
            <div class="floating glass-button" style="display: inline-block; background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); width: 80px; height: 80px; border-radius: 50%; box-shadow: 0 15px 40px rgba(17, 153, 142, 0.4); backdrop-filter: blur(10px); position: relative;">
              <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <path d="M10 20l8 8 16-16" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));"/>
                </svg>
              </div>
              <!-- Glass shine effect -->
              <div style="position: absolute; top: 15%; left: 20%; width: 30%; height: 30%; background: linear-gradient(135deg, rgba(255,255,255,0.3), transparent); border-radius: 50%; pointer-events: none;"></div>
            </div>
        </td>
      </tr>

        <!-- Enhanced Main Content with glass morphism -->
        <tr>
          <td class="content" style="padding: 32px 48px 48px 48px;">
            <h2 class="subtitle" style="color: #3F72AF; font-size: 28px; font-weight: 700; margin: 0 0 32px 0; text-align: center; background: linear-gradient(135deg, #3F72AF, #112D4E); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${t.greeting} ${name}! 👋</h2>
            
            <!-- Enhanced message container with glass effect -->
            <div class="glass-card" style="background: linear-gradient(135deg, rgba(248, 250, 255, 0.9) 0%, rgba(227, 242, 253, 0.8) 100%); backdrop-filter: blur(20px); padding: 40px; border-radius: 20px; margin-bottom: 40px; border: 1px solid rgba(63, 114, 175, 0.2); position: relative; overflow: hidden;">
              <!-- Decorative elements -->
              <div style="position: absolute; top: -20px; right: -20px; width: 80px; height: 80px; background: linear-gradient(135deg, rgba(63, 114, 175, 0.1), transparent); border-radius: 50%; pointer-events: none;"></div>
              <div style="position: absolute; bottom: -30px; left: -30px; width: 100px; height: 100px; background: linear-gradient(135deg, rgba(17, 153, 142, 0.08), transparent); border-radius: 50%; pointer-events: none;"></div>
              
              <div style="position: relative; z-index: 1;">
                <p style="margin: 0; font-size: 18px; line-height: 1.7; color: #2c3e50; text-align: center; font-weight: 500;">
                  ${t.userMessage}
                </p>
              </div>
            </div>

            <!-- Enhanced Features Grid with glass cards -->
            <div class="feature-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 20px; margin: 40px 0;">
              <div class="glass-card shadow-soft" style="text-align: center; padding: 28px 20px; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(15px); border: 1px solid rgba(63, 114, 175, 0.15); border-radius: 16px; box-shadow: 0 10px 30px rgba(63, 114, 175, 0.1); transition: all 0.3s ease; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #3F72AF, #11998e);"></div>
                <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #3F72AF, #112D4E); border-radius: 16px; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 20px rgba(63, 114, 175, 0.3);">
                  <span style="color: white; font-size: 20px;">✓</span>
                </div>
                <p style="margin: 0; font-size: 14px; color: #3F72AF; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">${t.thankYou}</p>
              </div>
              
              <div class="glass-card shadow-soft" style="text-align: center; padding: 28px 20px; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(15px); border: 1px solid rgba(17, 153, 142, 0.15); border-radius: 16px; box-shadow: 0 10px 30px rgba(17, 153, 142, 0.1); transition: all 0.3s ease; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #11998e, #38ef7d);"></div>
                <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #11998e, #38ef7d); border-radius: 16px; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 20px rgba(17, 153, 142, 0.3);">
                  <span style="color: white; font-size: 20px;">⚡</span>
                </div>
                <p style="margin: 0; font-size: 14px; color: #11998e; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">${t.quickResponse}</p>
              </div>
              
              <div class="glass-card shadow-soft" style="text-align: center; padding: 28px 20px; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(15px); border: 1px solid rgba(255, 107, 107, 0.15); border-radius: 16px; box-shadow: 0 10px 30px rgba(255, 107, 107, 0.1); transition: all 0.3s ease; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #FF6B6B, #ee5a24);"></div>
                <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #FF6B6B, #ee5a24); border-radius: 16px; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 20px rgba(255, 107, 107, 0.3);">
                  <span style="color: white; font-size: 20px;">🏆</span>
                </div>
                <p style="margin: 0; font-size: 14px; color: #FF6B6B; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">${t.professionalService}</p>
              </div>
            </div>

            <!-- Enhanced Signature with glass effect -->
            <div class="glass-card" style="margin-top: 48px; padding: 32px; background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(15px); border-radius: 16px; border: 1px solid rgba(63, 114, 175, 0.1); position: relative;">
              <div style="position: absolute; top: 50%; right: 20px; transform: translateY(-50%); opacity: 0.1;">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="#3F72AF">
                  <path d="M30 8l22 14v22L30 58 8 44V22z" stroke="#3F72AF" stroke-width="2" fill="none"/>
                </svg>
              </div>
              <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #2c3e50; position: relative; z-index: 1;">
                ${t.regards}
              </p>
            </div>
        </td>
      </tr>

        <!-- Enhanced Footer with glass morphism -->
        <tr>
          <td class="footer glass-card" style="background: linear-gradient(135deg, rgba(219, 226, 239, 0.8) 0%, rgba(248, 250, 255, 0.9) 100%); backdrop-filter: blur(20px); padding: 40px; text-align: center; border-top: 1px solid rgba(63, 114, 175, 0.1); position: relative;">
            <!-- Decorative background elements -->
            <div style="position: absolute; top: -10px; left: 10%; width: 60px; height: 60px; background: radial-gradient(circle, rgba(63, 114, 175, 0.1) 0%, transparent 70%); border-radius: 50%;"></div>
            <div style="position: absolute; bottom: -15px; right: 15%; width: 80px; height: 80px; background: radial-gradient(circle, rgba(17, 153, 142, 0.08) 0%, transparent 70%); border-radius: 50%;"></div>
            
            <div style="position: relative; z-index: 1;">
              <div style="margin-bottom: 24px;">
                <a href="https://sidikoff.com" class="glass-button" style="display: inline-block; background: linear-gradient(135deg, #3F72AF, #112D4E); color: white; padding: 16px 32px; border-radius: 30px; text-decoration: none; font-weight: 700; font-size: 16px; box-shadow: 0 8px 25px rgba(63, 114, 175, 0.4); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(255, 255, 255, 0.2); position: relative; overflow: hidden;">
                  <!-- Button shine effect -->
                  <span style="position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); transition: left 0.5s;"></span>
                  <span style="position: relative; z-index: 1;">🌐 Visiter notre site web</span>
                </a>
              </div>
              
              <div style="background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(10px); border-radius: 12px; padding: 20px; border: 1px solid rgba(63, 114, 175, 0.1);">
                <p style="margin: 0; font-size: 18px; color: #3F72AF; font-weight: 800; letter-spacing: 0.5px;">
                  <a href="https://sidikoff.com" style="color: #3F72AF; text-decoration: none; background: linear-gradient(135deg, #3F72AF, #112D4E); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">SIDIKOFF DIGITAL</a>
                </p>
                <p style="margin: 8px 0 0 0; font-size: 14px; color: #7f8c8d; font-weight: 500;">
                  ✨ Professional Digital Solutions • 📍 Paris, France
                </p>
              </div>
            </div>
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
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #FF6B6B 0%, #ee5a24 50%, #ff4757 100%); min-height: 100vh; padding: 20px 0;">
      
      <!-- Animated background elements -->
      <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0;">
        <div style="position: absolute; top: 15%; right: 10%; width: 120px; height: 120px; background: rgba(255, 255, 255, 0.1); border-radius: 50%; animation: float 3.5s ease-in-out infinite;"></div>
        <div style="position: absolute; top: 50%; left: 8%; width: 80px; height: 80px; background: rgba(255, 255, 255, 0.08); border-radius: 50%; animation: float 4.5s ease-in-out infinite reverse;"></div>
        <div style="position: absolute; bottom: 25%; right: 20%; width: 100px; height: 100px; background: rgba(255, 255, 255, 0.06); border-radius: 50%; animation: float 3s ease-in-out infinite;"></div>
      </div>
      
      <!-- Main Container with enhanced glass effect -->
      <table class="container glass-card shadow-strong" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 40px auto; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(20px); border-radius: 24px; box-shadow: 0 30px 80px rgba(0,0,0,0.15); overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.2); position: relative; z-index: 1;">
        
        <!-- Enhanced Header with alert gradient -->
        <tr>
          <td class="header gradient-alert" style="background: linear-gradient(135deg, #FF6B6B 0%, #ee5a24 50%, #ff4757 100%); padding: 48px 32px; text-align: center; position: relative; overflow: hidden;">
            <!-- Alert pattern overlay -->
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="alert-dots" width="25" height="25" patternUnits="userSpaceOnUse"><circle cx="12.5" cy="12.5" r="2" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23alert-dots)"/></svg>'); opacity: 0.3;"></div>
            <!-- Gradient overlay for depth -->
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%);"></div>
            <div style="position: relative; z-index: 2;">
              <div class="floating" style="display: inline-block; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); padding: 20px; border-radius: 50%; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.3);">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="white">
                  <path d="M20 3L3 12l17 9 17-9-17-9zM3 28l17 9 17-9M3 20l17 9 17-9" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));"/>
                </svg>
              </div>
              <h1 class="title" style="color: #ffffff; font-size: 32px; font-weight: 700; margin: 0; letter-spacing: -0.5px; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">${
                t.newRequest
              }</h1>
              <p style="color: rgba(255,255,255,0.9); font-size: 16px; margin: 8px 0 0 0; font-weight: 400; text-shadow: 0 1px 2px rgba(0,0,0,0.1);">Admin Notification System</p>
            </div>
          </td>
        </tr>

        <!-- Enhanced Alert Icon with pulsing effect -->
        <tr>
          <td style="padding: 0; text-align: center; transform: translateY(-30px);">
            <div class="floating glass-button" style="display: inline-block; background: linear-gradient(135deg, #FF6B6B, #ee5a24); width: 80px; height: 80px; border-radius: 50%; box-shadow: 0 15px 40px rgba(255, 107, 107, 0.4); backdrop-filter: blur(10px); position: relative;">
              <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <path d="M20 6v20M20 30h.01" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));"/>
                  <circle cx="20" cy="20" r="16" stroke="white" stroke-width="2.5" fill="none"/>
                </svg>
              </div>
              <!-- Glass shine effect -->
              <div style="position: absolute; top: 15%; left: 20%; width: 30%; height: 30%; background: linear-gradient(135deg, rgba(255,255,255,0.4), transparent); border-radius: 50%; pointer-events: none;"></div>
              <!-- Pulse effect -->
              <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; height: 100%; border: 2px solid rgba(255, 107, 107, 0.3); border-radius: 50%; animation: pulse 2s infinite;"></div>
            </div>
        </td>
      </tr>

        <!-- Enhanced Main Content with glass cards -->
        <tr>
          <td class="content" style="padding: 32px 48px 48px 48px;">
            <h2 class="subtitle" style="color: #FF6B6B; font-size: 28px; font-weight: 700; margin: 0 0 40px 0; text-align: center; background: linear-gradient(135deg, #FF6B6B, #ee5a24); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">📧 ${
              t.newRequest
            }</h2>
            
            <!-- Enhanced Contact Information with glass cards -->
            <div class="glass-card" style="background: linear-gradient(135deg, rgba(255, 245, 245, 0.9) 0%, rgba(255, 224, 224, 0.8) 100%); backdrop-filter: blur(20px); padding: 40px; border-radius: 20px; margin-bottom: 32px; border: 1px solid rgba(255, 107, 107, 0.2); position: relative; overflow: hidden;">
              <!-- Decorative elements -->
              <div style="position: absolute; top: -25px; right: -25px; width: 100px; height: 100px; background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), transparent); border-radius: 50%; pointer-events: none;"></div>
              <div style="position: absolute; bottom: -30px; left: -30px; width: 120px; height: 120px; background: linear-gradient(135deg, rgba(238, 90, 36, 0.08), transparent); border-radius: 50%; pointer-events: none;"></div>
              
              <div style="position: relative; z-index: 1;">
                <!-- Enhanced Name Section -->
                <div style="margin-bottom: 32px; display: flex; align-items: center; gap: 20px;">
                  <div style="flex-shrink: 0;">
                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #3F72AF, #112D4E); border-radius: 16px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(63, 114, 175, 0.3);">
                      <span style="color: white; font-size: 24px;">👤</span>
                    </div>
                  </div>
                  <div style="flex: 1;">
                    <p style="margin: 0 0 8px 0; font-size: 14px; color: #999; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">${
                      t.nameLabel
                    }</p>
                    <p style="margin: 0; font-size: 24px; color: #2c3e50; font-weight: 700;">${name}</p>
                  </div>
                </div>

                <!-- Enhanced Email Section -->
                <div style="margin-bottom: 32px; display: flex; align-items: center; gap: 20px;">
                  <div style="flex-shrink: 0;">
                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #11998e, #38ef7d); border-radius: 16px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(17, 153, 142, 0.3);">
                      <span style="color: white; font-size: 24px;">✉️</span>
                    </div>
                  </div>
                  <div style="flex: 1;">
                    <p style="margin: 0 0 8px 0; font-size: 14px; color: #999; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">${
                      t.emailLabel
                    }</p>
                    <div style="background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px); border-radius: 12px; padding: 12px 16px; border: 1px solid rgba(63, 114, 175, 0.2);">
                      <a href="mailto:${email}" style="color: #3F72AF; text-decoration: none; font-weight: 700; font-size: 18px;">${email}</a>
                    </div>
                  </div>
                </div>

                <!-- Enhanced Message Section -->
                <div style="display: flex; align-items: flex-start; gap: 20px;">
                  <div style="flex-shrink: 0;">
                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #9b59b6, #74b9ff); border-radius: 16px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(155, 89, 182, 0.3);">
                      <span style="color: white; font-size: 24px;">💬</span>
                    </div>
                  </div>
                  <div style="flex: 1;">
                    <p style="margin: 0 0 16px 0; font-size: 14px; color: #999; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">${
                      t.messageLabel
                    }</p>
                    <div class="glass-card" style="background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(15px); padding: 24px; border-radius: 16px; border: 1px solid rgba(155, 89, 182, 0.2); box-shadow: 0 8px 25px rgba(155, 89, 182, 0.1); position: relative;">
                      <div style="position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #9b59b6, #74b9ff); border-radius: 16px 16px 0 0;"></div>
                      <p style="margin: 0; font-size: 16px; line-height: 1.7; color: #2c3e50; white-space: pre-wrap; position: relative; z-index: 1;">${message}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Enhanced Quick Actions with glass buttons -->
            <div class="button-group" style="display: flex; justify-content: center; gap: 16px; margin-top: 40px; flex-wrap: wrap;">
              <a href="mailto:${email}" class="glass-button" style="display: inline-flex; align-items: center; gap: 12px; background: linear-gradient(135deg, #3F72AF, #112D4E); color: white; padding: 16px 28px; border-radius: 30px; text-decoration: none; font-weight: 700; font-size: 16px; box-shadow: 0 8px 25px rgba(63, 114, 175, 0.4); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(255, 255, 255, 0.2); position: relative; overflow: hidden;">
                <span style="font-size: 18px;">📧</span>
                <span>Répondre par email</span>
                <!-- Button shine effect -->
                <div style="position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); transition: left 0.5s;"></div>
              </a>
              <a href="https://sidikoff.com/contact" class="glass-button" style="display: inline-flex; align-items: center; gap: 12px; background: linear-gradient(135deg, #11998e, #38ef7d); color: white; padding: 16px 28px; border-radius: 30px; text-decoration: none; font-weight: 700; font-size: 16px; box-shadow: 0 8px 25px rgba(17, 153, 142, 0.4); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(255, 255, 255, 0.2); position: relative; overflow: hidden;">
                <span style="font-size: 18px;">📞</span>
                <span>Organiser un appel</span>
                <!-- Button shine effect -->
                <div style="position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); transition: left 0.5s;"></div>
              </a>
            </div>
        </td>
      </tr>

        <!-- Enhanced Footer with glass morphism -->
        <tr>
          <td class="footer glass-card" style="background: linear-gradient(135deg, rgba(248, 249, 250, 0.8) 0%, rgba(233, 236, 239, 0.9) 100%); backdrop-filter: blur(20px); padding: 40px; text-align: center; border-top: 1px solid rgba(255, 107, 107, 0.1); position: relative;">
            <!-- Decorative background elements -->
            <div style="position: absolute; top: -15px; left: 20%; width: 80px; height: 80px; background: radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, transparent 70%); border-radius: 50%;"></div>
            <div style="position: absolute; bottom: -20px; right: 25%; width: 100px; height: 100px; background: radial-gradient(circle, rgba(238, 90, 36, 0.08) 0%, transparent 70%); border-radius: 50%;"></div>
            
            <div style="position: relative; z-index: 1;">
              <div style="background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(15px); border-radius: 16px; padding: 24px; border: 1px solid rgba(255, 107, 107, 0.1); margin-bottom: 20px;">
                <p style="margin: 0 0 8px 0; font-size: 16px; color: #666; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                  🤖 ${t.autoNotification}
                </p>
                <p style="margin: 0; font-size: 18px; color: #FF6B6B; font-weight: 800; letter-spacing: 0.5px;">
                  <a href="https://sidikoff.com" style="color: #FF6B6B; text-decoration: none; background: linear-gradient(135deg, #FF6B6B, #ee5a24); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">SIDIKOFF DIGITAL</a>
                </p>
                <p style="margin: 12px 0 0 0; font-size: 14px; color: #7f8c8d; font-weight: 500;">
                  ⚡ Notification instantanée • 🕐 ${new Date().toLocaleDateString(
                    locale === 'fr' ? 'fr-FR' : locale === 'ru' ? 'ru-RU' : 'en-US'
                  )} à ${new Date().toLocaleTimeString(
    locale === 'fr' ? 'fr-FR' : locale === 'ru' ? 'ru-RU' : 'en-US'
  )}
                </p>
              </div>
              
              <div style="font-size: 12px; color: #999; font-weight: 500;">
                📧 Email automatiquement généré par le système de contact SIDIKOFF
              </div>
            </div>
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
