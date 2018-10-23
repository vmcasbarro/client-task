'use strict'
const authEvents = require('./auth/events.js')
const listEvents = require('./list/events.js')
const messageEvents = require('./message/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  authEvents.addHandlers()
  listEvents.addHandlers()
  messageEvents.addHandlers()
})
