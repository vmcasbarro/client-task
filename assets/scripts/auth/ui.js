'use strict'

const store = require('./../store.js')

const signUpSuccess = function () {
  console.log('signed up.')
  clearForms()
}

const signUpFailure = function () {
  console.log('didn\'t sign up. something went wrong.')
  clearForms()
}

const signInSuccess = function (response) {
  store.user = response.user
  console.log('signed in.', response)
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
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
