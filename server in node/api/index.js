const http = require('http'),
      data = require('./urls.json'),
      URL = require('url'),
      fs = require('fs'),
      path = require('path')

function WriteFile(cb) {
  fs.writeFile(
    path.join(__dirname, "urls.json"), 
    JSON.stringify(data, null, 2),
    (err) => {
      if(err) throw err

      cb(JSON.stringify({message: "ok"}))
    });
}


http.createServer((req, res) => {
    const { name, url, del } = URL.parse(req.url, true).query
    
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*'
    })

    // all resources
    if(!name || !url)
      return res.end(JSON.stringify(data))

    if(del) {
      data.urls = data.urls.filter(item => String(item.url) !== String(url))
      return WriteFile((message) => res.end(message))
    }
   
    data.urls.push({name, url})

    return WriteFile((message) => res.end(message))

}).listen(3000, () => console.log("Api is Running"))