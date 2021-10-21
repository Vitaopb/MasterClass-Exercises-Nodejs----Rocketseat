const http = require('http'),
      fs = require('fs'),
      path = require('path')

http.createServer((req, res) => {

  const file = req.url === '/' ? 'index.html' : req.url,
        filePath = path.join(__dirname, 'public', file),
        extname = path.extname(filePath),
        allowedFileTypes = ['.html', '.css', '.js'],
        allowed = allowedFileTypes.find(item => item == extname)

        if(!allowed) return

    fs.readFile(
      filePath,
      (err, content) => {
        if (err) throw err

        res.end(content)
      }

    )

}).listen(5000, () => console.log('Sever is running'))