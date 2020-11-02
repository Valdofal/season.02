const EventEmitter = require ('events')

function empty () {
    const emit = new EventEmitter()
    emit.on('hi', () => {
        console.log('Ch0ooooooper')
    })
    emit.emit('hi')
}

function withArgs(names){
    const emitter = new EventEmitter
    emitter.on('newFellow', (name) => {
        console.log(`Here comes a new pirate ->> ${name}`)
    })
    names.forEach(
        (name) => emitter.emit('newFellow', name)
        
    );
}


module.exports = {
    empty,  
    withArgs, 
}