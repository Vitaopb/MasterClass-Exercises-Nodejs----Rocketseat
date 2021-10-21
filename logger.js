const EventEmitter = require('events'),
      fs = require('fs'),
      path = require('path')

const emitter = new EventEmitter()

emitter.on('log', (message) => {
  fs.appendFile(path.join(__dirname, 'log.txt'), message, err => {
    if (err) throw err
  })
})

function log(message) {
  emitter.emit('log', message)
}

module.exports = log