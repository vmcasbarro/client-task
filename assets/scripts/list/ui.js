'use strict'

const showListsTemplate = require('../templates/list-listing.handlebars')

const getListsSuccess = (data) => {
  // console.log(data)
  const showListsHtml = showListsTemplate({ lists: data.lists })
  $('.content').html(showListsHtml)
}

const clearLists = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getListsSuccess,
  clearLists,
  failure
}
