'use strict'

const config = require('../config')
const store = require('./../store.js')

const getLists = function () {
  return $.ajax({
    url: config.apiUrl + '/lists',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
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

const updateList = function (dataArray) {
  const listId = dataArray[0]
  const data = dataArray[1]
  return $.ajax({
    url: config.apiUrl + `/lists/${listId}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteList = function (listId) {
  return $.ajax({
    url: config.apiUrl + `/lists/${listId}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getLists,
  createList,
  updateList,
  deleteList
}
