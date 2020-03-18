const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jharden147@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcom to the app, ${name}`
    })
}

const cancelAccountEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jharden147@gmail.com',
        subject: 'Your account got deleted',
        text: `We canceled your account, ${name}.Let us know why you did it.`
    })
}

module.exports = {
    sendWelcomeEmail,
    cancelAccountEmail
}