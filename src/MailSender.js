const nodeMailer = require('nodemailer');

class MailSender {
    
    constructor() {
        this._transporter = nodeMailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });
    }

    sendEmail(targetEmail, content) {
        const message = {
            from: 'Notes App',
            to: targetEmail,
            subject: 'Eksport Catatan',
            text: 'Terlampir hasil dari expor catatan',
            attachment: [
                {
                    filename: 'notes.json',
                    content,
                },
            ],
        };

        return this._transporter.sendMail(message);
    }
}

module.exports = MailSender;