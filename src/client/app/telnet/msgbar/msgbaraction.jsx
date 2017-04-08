const SEND = 'SEND'

export function sendMessage(message) {
  return {
    type: SEND,
    payload: message
  }
}
