const nodemailer = require('nodemailer')

function send(options = {}) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    secureConnection: true,
    port: 465,
    auth: {
      user: '869688975@qq.com',
      pass: 'tigastoogyhxbbgj' // 授权码
    }
  })

  const emailOptions = {
    from: '869688975@qq.com',
    to: '972212465@qq.com',
    subject: 'Hello',
    text: 'Hello',
    html: '<h1>Hello world</h1>'
  }

  transporter.sendMail(emailOptions, (err, info) => {
    if (err) console.log(err)
    console.log(info)
  })
}

send()
