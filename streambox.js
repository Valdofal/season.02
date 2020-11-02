const fs = require ('fs')
const path = require ('path')

function duplicate(filename) {
    const { name, ext } = path.parse(filename)
  
    const readStream = fs.createReadStream(filename)
    const writeStream = fs.createWriteStream(`${name}.copy${ext}`)
  
    readStream.pipe(writeStream)
  }

  module.exports = duplicate