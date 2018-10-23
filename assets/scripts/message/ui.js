'use strict'

const showConversationTemplate = require('../templates/conversation-listing.handlebars')

const getConversationsSuccess = (data) => {
  console.log('made it here!')
  clearForms()
  const showConversationHtml = showConversationTemplate({ conversations: data.conversations })
  $('.content').html(showConversationHtml)
}

const failure = (error) => {
  console.error(error)
}

const clearForms = function () {
  $('#createConversationForm').trigger('reset')
  $('#createMessageForm').trigger('reset')
}


module.exports = {
  getConversationsSuccess,
  failure
}
