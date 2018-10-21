'use strict'

const store = require('./../store.js')
const listEvents = require('./../list/events.js')

const signUpSuccess = function () {
  showSignIn()
  console.log('signed up.')
  clearForms()
}

const signUpFailure = function () {
  console.log('didn\'t sign up. something went wrong.')
  clearForms()
}

const signInSuccess = function (response) {
  store.user = response.user
  console.log('signed in.', response.user.email)
  const userName = response.user.email
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
  console.log('error signing in. please try again')
  clearForms()
}

const changePasswordSuccess = function () {
  console.log('password changed. don\'t forget it.')
  clearForms()
}

const changePasswordFailure = function () {
  console.log('password wasn\'t changed. try again.')
  clearForms()
}

const signOutSuccess = function () {
  console.log('signed out.')
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
  console.log('sign out error. try again.')
  clearForms()
}

const clearForms = function () {
  $('#signin-form').trigger('reset')
  $('#signup-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#createListForm').trigger('reset')
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
