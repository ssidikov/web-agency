export const userConfirmationFR = ({ name }: { name: string }) => `
  <div style="font-family:Arial,sans-serif;font-size:16px;color:#222;">
    <h2 style="color:#3F72AF;">Bonjour ${name},</h2>
    <p>Nous avons bien reçu votre demande. Notre équipe vous contactera prochainement pour en discuter.</p>
    <p style="margin-top:32px;">Cordialement,<br>L'équipe Sidikoff</p>
    <hr style="margin:32px 0;">
    <p style="font-size:13px;color:#888;">Ce message est généré automatiquement, merci de ne pas y répondre.</p>
  </div>
`;

export const adminNotificationFR = ({ name, email, message }: { name: string; email: string; message: string }) => `
  <div style="font-family:Arial,sans-serif;font-size:16px;color:#222;">
    <h2 style="color:#3F72AF;">Nouvelle demande reçue</h2>
    <p><strong>Nom:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <blockquote style="background:#F9F7F7;padding:16px;border-radius:8px;">${message}</blockquote>
    <hr style="margin:32px 0;">
    <p style="font-size:13px;color:#888;">Notification automatique Sidikoff</p>
  </div>
`;
