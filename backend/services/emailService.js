const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  }

  async sendOTPEmail(email, name, otp) {
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>OTP Verification - SkillSetu</title>
        <style>
          body { font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
          .container { max-width: 500px; margin: 50px auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
          .content { padding: 30px; text-align: center; }
          .otp-code { font-size: 36px; font-weight: bold; color: #667eea; letter-spacing: 5px; padding: 15px; background: #f0f0f0; border-radius: 8px; display: inline-block; margin: 20px 0; }
          .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>SkillSetu</h1>
          </div>
          <div class="content">
            <h2>Hello ${name}!</h2>
            <p>Your One-Time Password (OTP) for verification is:</p>
            <div class="otp-code">${otp}</div>
            <p>This OTP will expire in <strong>10 minutes</strong>.</p>
            <p>If you didn't request this, please ignore this email.</p>
          </div>
          <div class="footer">
            <p>&copy; 2024 SkillSetu. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await this.transporter.sendMail({
      from: `"SkillSetu" <${process.env.EMAIL_FROM || 'noreply@skillsetu.com'}>`,
      to: email,
      subject: 'SkillSetu - Your OTP Verification Code',
      html
    });
  }

  async sendWelcomeEmail(email, name) {
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
          .container { max-width: 500px; margin: 50px auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
          .content { padding: 30px; text-align: center; }
          .button { display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to SkillSetu! 🎉</h1>
          </div>
          <div class="content">
            <h2>Welcome aboard, ${name}!</h2>
            <p>Your email has been successfully verified.</p>
            <p>You're now ready to start your skill exchange journey!</p>
            <a href="${process.env.FRONTEND_URL}/login" class="button">Login to Your Account</a>
          </div>
          <div class="footer">
            <p>&copy; 2024 SkillSetu. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await this.transporter.sendMail({
      from: `"SkillSetu" <${process.env.EMAIL_FROM || 'noreply@skillsetu.com'}>`,
      to: email,
      subject: 'Welcome to SkillSetu - Account Verified!',
      html
    });
  }
}

module.exports = new EmailService();