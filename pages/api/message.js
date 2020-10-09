const twilio = require('twilio')

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const client = twilio(accountSid, authToken)

const sendMessage = async message => {
  try {
    const sent = await client.messages.create({
      body: `${message}`,
      from: '+12513510296',
      to: '+358449323786',
    })
    return sent
  } catch (err) {
    throw err
  }
}

const messageHandler = async (req, res) => {
  const body = JSON.parse(req.body)
  if (body && body.name && body.email && body.message) {
    if (req.method === 'POST') {
      const message = `\n${body.name}\n${body.email}\n${body.message}`
      try {
        await sendMessage(message)
        res.status(200).end()
      } catch (err) {
        res.status(500).end()
      }
    }
  }
  return res.status(400).end()
}

export default messageHandler
