'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onGetLists = (event) => {
  event.preventDefault()
  api.getLists()
    .then(ui.getListsSuccess)
    .catch(ui.failure)
}

const onClearLists = (event) => {
  event.preventDefault()
  ui.clearLists()
}

const onCreateList = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createList(data)
    .then(ui.createListSuccess)
    .catch(ui.createListFailure)
}

const onDeleteList = (event) => {
  event.preventDefault()
  const listId = $(event.target).closest('section').data('id')
  console.log(listId)
  if (confirm('are you sure you want to delete this list?')) {
    api.deleteList(listId)
      .then(() => { onGetLists(event) })
      .catch(console.log)
  }
}

const addHandlers = () => {
  $('#getListsButton').on('click', onGetLists)
  $('#clearListsButton').on('click', onClearLists)
  $('#createListForm').on('submit', onCreateList)
  $('.content').on('click', '.delete-list', onDeleteList)
}

module.exports = {
  addHandlers
}
