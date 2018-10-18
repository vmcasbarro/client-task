'use strict'

const config = require('../config')

const getLists = function () {
  return $.ajax({
    url: config.apiUrl + '/lists'
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
  deleteList
}
