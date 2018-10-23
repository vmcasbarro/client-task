'use strict'

const config = require('../config')
const store = require('./../store.js')

const getConversations = function () {
  return $.ajax({
    url: config.apiUrl + '/conversations',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createConversation = function (data) {
  return $.ajax({
    url: config.apiUrl + '/conversations',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getMessages = function () {
  return $.ajax({
    url: config.apiUrl + '/messages',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createMessage = function (data) {
  return $.ajax({
    url: config.apiUrl + '/messages',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  getConversations,
  createConversation,
  getMessages,
  createMessage
}
