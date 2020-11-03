const fs = require('fs')
const folder = './'
const readline = require('readline')

WTFIsThisPipe()

function WTFIsThisPipe (){
    let jsFiles = []
    let fileName =''
    let functionNames = []
    let i = 0
    fs.readdir(folder, (err, files) => {
        files.forEach(file => {
            if(file.endsWith('.js')) {
                fileName = file
                jsFiles[i] = fileName
                functionNames = fnInFile(fileName)
            }
        })
    })
}

function fnInFile (filename){
    const input = fs.createReadStream(filename)
    const rl = readline.createInterface({input})
    let functions = []
    
    rl.on('line', (line) => {
        if (line.startsWith('function')){
            line = line.replace('function', '').replace('{','')
            console.log(line)
        }
    })
}