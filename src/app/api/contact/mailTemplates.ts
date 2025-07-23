export const userConfirmationFR = ({ name }: { name: string }) => `
  <div style="background:#F9F7F7;font-family:Arial,sans-serif;font-size:16px;color:#222;padding:0;margin:0;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:auto;background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(63,114,175,0.08);overflow:hidden;">
      <tr>
        <td style="background:#3F72AF;padding:32px 0;text-align:center;">
          <img src='https://sidikoff.com/logo-sidikoff.webp' alt='Sidikoff' style='height:48px;margin-bottom:8px;'>
          <h1 style="color:#fff;font-size:28px;margin:0;">Sidikoff</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:40px 32px 24px 32px;">
          <h2 style="color:#3F72AF;font-size:22px;margin-bottom:16px;">Bonjour ${name},</h2>
          <p style="margin-bottom:24px;">Nous avons bien reçu votre demande.<br>Notre équipe vous contactera prochainement pour en discuter.</p>
          <p style="margin-top:32px;">Cordialement,<br>L'équipe Sidikoff</p>
        </td>
      </tr>
      <tr>
        <td style="background:#DBE2EF;padding:24px;text-align:center;font-size:13px;color:#3F72AF;">
          <a href="https://sidikoff.com" style="color:#3F72AF;text-decoration:underline;">SIDIKOFF DIGITAL</a>
        </td>
      </tr>
    </table>
  </div>
`

export const adminNotificationFR = ({
  name,
  email,
  message,
}: {
  name: string
  email: string
  message: string
}) => `
  <div style="background:#F9F7F7;font-family:Arial,sans-serif;font-size:16px;color:#222;padding:0;margin:0;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:auto;background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(63,114,175,0.08);overflow:hidden;">
      <tr>
        <td style="background:#3F72AF;padding:32px 0;text-align:center;">
          <img src='https://sidikoff.com/logo-sidikoff.webp' alt='Sidikoff' style='height:48px;margin-bottom:8px;'>
          <h1 style="color:#fff;font-size:28px;margin:0;">Sidikoff</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:40px 32px 24px 32px;">
          <h2 style="color:#3F72AF;font-size:22px;margin-bottom:16px;">Nouvelle demande reçue</h2>
          <p style="margin-bottom:16px;"><strong>Nom:</strong> ${name}</p>
          <p style="margin-bottom:16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color:#3F72AF;text-decoration:underline;">${email}</a></p>
          <p style="margin-bottom:16px;"><strong>Message:</strong></p>
          <blockquote style="background:#DBE2EF;padding:16px;border-radius:8px;color:#112D4E;">${message}</blockquote>
        </td>
      </tr>
      <tr>
        <td style="background:#DBE2EF;padding:24px;text-align:center;font-size:13px;color:#3F72AF;">
          Notification automatique Sidikoff<br>
          <a href="https://sidikoff.com" style="color:#3F72AF;text-decoration:underline;">SIDIKOFF DIGITAL</a>
        </td>
      </tr>
    </table>
  </div>
`
