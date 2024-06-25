const urlParams = new URLSearchParams(window.location.search);
const mode = urlParams.get('hub.mode');
const token = urlParams.get('hub.verify_token');
const challenge = urlParams.get('hub.challenge');

const VERIFY_TOKEN = '420123456789';

if (mode && token) {
  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    // Respond with the challenge token from the request
    document.write(challenge);
  } else {
    // Respond with '403 Forbidden' if tokens do not match
    document.write('403 Forbidden');
  }
}