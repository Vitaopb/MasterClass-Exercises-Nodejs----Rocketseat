const os = require('os'),
      log = require('./logger')

setInterval(() => {
  const { freemem, totalmem } = os,
        total = parseInt(totalmem() / 1024 / 1024),
        mem = parseInt(freemem() / 1024 / 1024),
        percents = parseInt((mem / total) * 100)
  
  
  const stats = {
    free: `${mem} MB`,
    total: `${total} MB`,
    usage: `${percents}%`
  }

  console.clear()
  console.log("-------PC STATS-------");
  console.table(stats)

  log(`${JSON.stringify(stats)}\n`)

}, 1000)
