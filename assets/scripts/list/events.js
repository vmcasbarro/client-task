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
    .then(() => { onGetLists(event) })
    .catch(console.log)
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

const onUpdateList = (event) => {
  event.preventDefault()
  const listId = $(event.target).closest('section').data('id')
  const formFieldData = getFormFields(event.target)
  const data = [listId, formFieldData]
  api.updateList(data)
    .then(() => { onGetLists(event) })
    .catch(console.log)
}

const onCreateTask = (event) => {
  event.preventDefault()
  const listId = $(event.target).closest('section').data('id')
  const formFieldData = getFormFields(event.target)
  const data = [listId, formFieldData]
  console.log(data)
  api.createTask(data)
    .then(() => { onGetLists(event) })
    .catch(console.log)
}

const addHandlers = () => {
  $('#getListsButton').on('click', onGetLists)
  $('#clearListsButton').on('click', onClearLists)
  $('#createListForm').on('submit', onCreateList)
  $('.content').on('click', '.delete-list', onDeleteList)
  $('.content').on('submit', '.update-list-form', onUpdateList)
  $('.content').on('submit', '.create-task-form', onCreateTask)
}

module.exports = {
  addHandlers
}
