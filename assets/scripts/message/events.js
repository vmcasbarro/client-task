'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onGetConversations = (event) => {
  api.getConversations()
    .then(ui.getConversationsSuccess)
    .catch(ui.failure)
}

const onCreateConversation = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createConversation(data)
    .then(() => { onGetConversations(event) })
    .catch(console.log)
}

// const onGetMessages = (event) => {
//   api.getMessages()
//     .then(ui.getMessagesSuccess)
//     .catch(ui.failure)
// }

const onCreateMessage = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createMessage(data)
    .then(() => { onGetConversations(event) })
    .catch(console.log)
}

const addHandlers = () => {
  $('#getConversationsButton').on('click', onGetConversations)
  $('#createConversationForm').on('submit', onCreateConversation)
  // $('#getMessagesButton').on('click', onGetMessages)
  $('#createMessageForm').on('submit', onCreateMessage)
}

module.exports = {
  addHandlers,
  onGetConversations
}
