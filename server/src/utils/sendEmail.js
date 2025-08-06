const nodemailer = require("nodemailer");
const Imap = require('imap');

const sendEmail = async (order) => {
    const { name, surname, emailAddress } = order.user;

    // IMAP (receiving) server details
    const imapServer = 'imap.titan.email';
    const imapPort = 993;

    try {
        // Nodemailer configuration for sending the email
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            }
        });

        //const formattedMessage = message.replace(/\n\r?/g, '<br/>');

        const subject = `${name}, here's your 12 week plan`;
        const message = `Here's your 12 week body transformation plan.`

        const options = {
            from: process.env.EMAIL_USER,
            to: emailAddress,
            replyTo: process.env.EMAIL_USER,
            subject: `${name}, here's your 12 week plan`,
            html:
                `
                <div style="font-family: sans-serif; font-size: 11px;">
            Hi, ${name}.

            <br/>
            <br/>
            ${message}
             <br/><br/>
            👉 <a href="https://miranda-fitness-backend.onrender.com/api/products/download-pdf/68902894d6aa600cef36a96f" target="_blank" style="color: #007bff; text-decoration: underline;">
                    Click here to download your plan
                </a>
            <br/><br/>

            Best,
            <br/>
            <br/>
            <strong>Miranda</strong>
            <br/>
            MLG Fitness Team

            🌐 <a href="https://miranda-fitness.onrender.com/" target="_blank">easy-outreach.com</a>
            </div>`
        };

        // Send the email using Nodemailer
        const info = await transporter.sendMail(options);
        console.log("Email sent:", info);

        // IMAP configuration for appending the sent email to the "Sent" folder
        const imap = new Imap({
            user: process.env.EMAIL_USER,
            password: process.env.EMAIL_PASS,
            host: imapServer,
            port: imapPort,
            tls: true,
        });

        imap.once('ready', () => {
            imap.openBox('Sent', true, (err) => {
                if (err) {
                    console.error('Error opening "Sent" folder:', err);
                    imap.end();
                    return;
                }

                // Create the email message as MIMEText
                const emailMessage = `From: ${process.env.EMAIL_USER}\r\nTo: ${emailAddress}`;

                // Append the sent email to the "Sent" folder
                imap.append(emailMessage, { mailbox: 'Sent' }, (appendErr) => {
                    if (appendErr) {
                        console.error('Error appending email to "Sent" folder:', appendErr);
                    } else {
                        console.log('Email appended to "Sent" folder.');
                    }
                    imap.end();
                });
            });
        });

        imap.once('error', (imapErr) => {
            console.error('IMAP Error:', imapErr);
        });

        imap.connect();
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendEmail;