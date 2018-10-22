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
  $('.list-rename').removeClass('inline')
  $('.list-rename').addClass('hidden')
  $('.update-list-form').removeClass('hidden')
  $('.update-list-form').addClass('inline')
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
