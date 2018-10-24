'use strict'
const authEvents = require('./auth/events.js')
const listEvents = require('./list/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  authEvents.addHandlers()
  listEvents.addHandlers()

  $("#night").click(function() {
		$('body').css('background-color', '#001021')
    $('input[type="text"]').css('background-color', '#001021')
    $('input[type="text"]').css('color', '#C93200')
    $('body').css('color', '#C93200')
	})
  $("#sunshine").click(function() {
		$('body').css('background-color', '#F9F9F9')
    $('body').css('color', '#001021')
	})
})
