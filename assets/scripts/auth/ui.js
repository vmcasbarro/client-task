'use strict'

const store = require('./../store.js')
const listEvents = require('./../list/events.js')

const signUpSuccess = function () {
  showSignIn()
  clearForms()
  $('#signup-success-alert').removeClass('hidden')
}

const signUpFailure = function () {
  clearForms()
  $('#signup-failure-alert').removeClass('hidden')
}

const signInSuccess = function (response) {
  store.user = response.user
  const userName = response.user.email
  $('.username').removeClass('hidden')
  $('#username').html(userName)
  $('.list-nav').removeClass('hidden')
  $('.signout-button').removeClass('hidden')
  $('#signin-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('.signup-button').addClass('hidden')
  listEvents.onGetLists()

  clearForms()
}

const signInFailure = function () {
  clearForms()
  $('#incorrect-credentials').removeClass('hidden')
}

const changePasswordSuccess = function () {
  clearForms()
  $('#password-changed-alert').removeClass('hidden')
}

const changePasswordFailure = function () {
  clearForms()
  $('#password-unchanged-alert').removeClass('hidden')
}

const signOutSuccess = function () {
  $('.username').addClass('hidden')
  $('#username').empty()
  $('.content').empty()
  $('.list-nav').addClass('hidden')
  $('#signin-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('.signout-button').addClass('hidden')
  $('.signup-button').removeClass('hidden')
  clearForms()
}

const signOutFailure = function () {
  clearForms()
}

const clearForms = function () {
  $('#signin-form').trigger('reset')
  $('#signup-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#createListForm').trigger('reset')
  $('#incorrect-credentials').addClass('hidden')
  $('#signup-success-alert').addClass('hidden')
  $('#signup-failure-alert').addClass('hidden')
  $('#password-changed-alert').addClass('hidden')
  $('#password-unchanged-alert').addClass('hidden')
}

const showSignUp = function () {
  $('#signin-form').addClass('hidden')
  $('.signup-button').addClass('hidden')
  $('#signup-form').removeClass('hidden')
  $('.signin-button').removeClass('hidden')
}

const showSignIn = function () {
  $('#signup-form').addClass('hidden')
  $('.signin-button').addClass('hidden')
  $('#signin-form').removeClass('hidden')
  $('.signup-button').removeClass('hidden')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  showSignUp,
  showSignIn
}
