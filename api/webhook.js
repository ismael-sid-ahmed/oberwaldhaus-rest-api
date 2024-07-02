export default function handler(req, res) {
    const { query } = req;
    const mode = query['hub.mode'];
    const token = query['hub.verify_token'];
    const challenge = query['hub.challenge'];
    const VERIFY_TOKEN = process.env.MY_VERIFY_TOKEN; // Set this in your environment
    console.log('VERIFY_TOKEN from env:', process.env.MY_VERIFY_TOKEN);
    console.log('mode:', process.env.mode);
    if (token === VERIFY_TOKEN) {
      res.status(200).send(challenge);
    } else {
      res.status(403).end();
    }
  }
  