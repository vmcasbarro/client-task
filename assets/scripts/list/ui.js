'use strict'

const showListsTemplate = require('../templates/list-listing.handlebars')

const getListsSuccess = (data) => {
  clearForms()
  const showListsHtml = showListsTemplate({ lists: data.lists })
  $('.content').html(showListsHtml)
}

const failure = (error) => {
  console.error(error)
}

const clearForms = function () {
  $('.update-list-form').trigger('reset')
  $('#createListForm').trigger('reset')
}

const showRenameList = function (event) {
  const listId = $(event.target).closest('section').data('id')
  console.log(listId)
  $(`[data-list-id=${listId}] > .list-rename`).removeClass('inline')
  $(`[data-list-id=${listId}] > .list-rename`).addClass('hidden')
  $(`[data-list-id=${listId}] > .update-list-form`).removeClass('hidden')
  $(`[data-list-id=${listId}] > .update-list-form`).addClass('inline')
}

const showRenameTask = function (event) {
  const taskId = $(event.target).closest('div').data('task-id')
  $(`[data-task-id=${taskId}] > .task-rename`).removeClass('inline')
  $(`[data-task-id=${taskId}] > .task-rename`).addClass('hidden')
  $(`[data-task-id=${taskId}] > .update-task-form`).removeClass('hidden')
  $(`[data-task-id=${taskId}] > .update-task-form`).addClass('inline')
}

const taskCompleteSuccess = function (target) {
  console.log('in ui.js', target)
  $(target).addClass('strikethrough')
}

const taskNotCompleteSuccess = function (target) {
  console.log('in ui.js', target)
  $(target).removeClass('strikethrough')
}

module.exports = {
  getListsSuccess,
  failure,
  showRenameList,
  showRenameTask,
  taskCompleteSuccess,
  taskNotCompleteSuccess
}
