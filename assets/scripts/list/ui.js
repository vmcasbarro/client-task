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
  // const listId = $(event.target).closest('section').data('id')
  console.log(event.target)
  // the field that is the child of the section with data-id === listId
  // $(event.target).closest('.list-rename-input-field').removeClass('hidden')
  $('.list-rename-input-field').removeClass('hidden')
}

const showRenameTask = function (event) {
  $('.task-rename').removeClass('inline')
  $('.task-rename').addClass('hidden')
  $('.update-task-form').removeClass('hidden')
  $('.update-task-form').addClass('inline')
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
