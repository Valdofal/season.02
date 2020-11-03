const fs = require('fs')
const path = require('path')
const { createInterface } = require('readline')
const { Transform } = require('stream')
const readline = require('readline')
const { getDiffieHellman } = require('crypto')

function duplicate(filename) {
  const { name, ext } = path.parse(filename)

  const readStream = fs.createReadStream(filename)
  const writeStream = fs.createWriteStream(`${name}.copy${ext}`)

  readStream.pipe(writeStream)
}

function transform(filename, re, fn, in_stdout = true) {
  const transformer = new Transform({
    transform(chunk, _, callback) {
      this.push(chunk.toString().replace(re, fn))

      callback()
    }
  })

  const readStream = fs.createReadStream(filename)
  
  readStream
    .pipe(transformer)
    .pipe(process.stdout)
}

function csvtojson(filename){
    const input = fs.createReadStream(filename)
    const rl = readline.createInterface({input})
    let lines = 0
    let header = []
    let values = []
    let finalArray = []
    let result= ''
    rl.on('line', (line) =>{
        if(lines == 0 ){
            header = line.split(';')
        }
        else {
            values = line.split(';')
            for (let i = 0; i < line.split(';').length; i++){
                finalArray[i] = "'" + header[i] + "':'" +  values[i] + "'"
            }
        }

        lines ++
        console.log(finalArray)
        result = JSON.stringify(finalArray)
        console.log(result)
        fs.writeFile('Comp0ser.JSON', result, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
    })
}
module.exports = {
  duplicate,
  transform,
  csvtojson
}