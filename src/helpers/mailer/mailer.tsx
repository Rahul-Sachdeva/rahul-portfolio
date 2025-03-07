import nodemailer from 'nodemailer';

interface mailCredentials {
    name: string;
    email: string;
    message: string;
}

export const sendEmail = async({name, email, message}: mailCredentials) => {
    try {
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
            user: process.env.NODEMAILER_USERNAME,  // Should Not be in the code but .env
            pass: process.env.NODEMAILER_PASSWORD   // should not be in the code but .env
            }
        });

        const mailOptions = {
            from: email, 
            to: 'rahulsachdeva0305@gmail.com', // list of receivers
            subject: `Message for you by ${name} on your Portfolio`,
            html: message, // html body
        }

        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse;

    } catch (error:any) {
        throw new Error(error.message)
    }
}
