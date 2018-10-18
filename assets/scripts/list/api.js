'use strict'

const config = require('../config')
const store = require('./../store.js')

const getLists = function () {
  return $.ajax({
    url: config.apiUrl + '/lists'
  })
}

const createList = function (data) {
  return $.ajax({
    url: config.apiUrl + '/lists',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteList = function (listId) {
  return $.ajax({
    url: config.apiUrl + `/lists/${listId}`,
    method: 'DELETE'
  })
}

module.exports = {
  getLists,
  createList,
  deleteList
}
