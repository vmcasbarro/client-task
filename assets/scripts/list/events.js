'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onGetLists = (event) => {
  api.getLists()
    .then(ui.getListsSuccess)
    .catch(ui.failure)
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

const onRenameTask = (event) => {
  event.preventDefault()
  const listId = $(event.target).closest('section').data('id')
  const taskId = $(event.target).closest('div').data('id')
  const data = getFormFields(event.target)
  api.updateTask(listId, taskId, data)
    .then(() => { onGetLists(event) })
    .catch(console.log)
}

const onDeleteTask = (event) => {
  event.preventDefault()
  const listId = $(event.target).closest('section').data('id')
  const taskId = $(event.target).closest('div').data('id')
  if (confirm('are you sure you want to delete this task?')) {
    api.deleteTask(listId, taskId)
      .then(() => { onGetLists(event) })
      .catch(console.log)
  }
}

const onToggleTaskComplete = (event) => {
  event.preventDefault()
  const listId = $(event.target).closest('section').data('id')
  const taskId = $(event.target).closest('div').data('id')
  if ($(event.target).hasClass('strikethrough')) {
    api.taskNotComplete(event, listId, taskId)
      .then(ui.taskNotCompleteSuccess(event.target))
      .catch(console.log)
	}
  else {
    // $(event.target).addClass('strikethrough')
    api.taskComplete(event, listId, taskId)
      .then(ui.taskCompleteSuccess(event.target))
      .catch(console.log)
  }
}

const addHandlers = () => {
  $('#createListForm').on('submit', onCreateList)
  $('.content').on('click', '.delete-list', onDeleteList)

  // need this event to only show the form intended
  $('.content').on('click', '.list-rename', ui.showRenameList)
  $('.content').on('submit', '.update-list-form', onUpdateList)

  $('.content').on('submit', '.create-task-form', onCreateTask)
  $('.content').on('click', '.task-rename', ui.showRenameTask)
  $('.content').on('submit', '.update-task-form', onRenameTask)
  $('.content').on('click', '.delete-task', onDeleteTask)
  $('.content').on('click', '.task', onToggleTaskComplete)
}

module.exports = {
  addHandlers,
  onGetLists
}
