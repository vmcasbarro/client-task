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

const showRenameForm = function (event) {
  // const listId = $(event.target).closest('section').data('id')
  console.log(event.target)
  // the field that is the child of the section with data-id === listId
  // $(event.target).closest('.list-rename-input-field').removeClass('hidden')
  $('.list-rename-input-field').removeClass('hidden')
}

module.exports = {
  getListsSuccess,
  failure,
  showRenameForm
}
