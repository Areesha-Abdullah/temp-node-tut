const EventEmitter = require('events')

//events is a class so create an instance of it
const emitter = new EventEmitter()
//on listen for specific event  instance.on('event name', callbackfunc)
emitter.on('response', ()=>{
    console.log("hello")
})
emitter.on('response', (name, age)=>{
    console.log(`hi ${name} ${age}`)
})
//we first listen for the event with on and then only we can emit that event
//.emit emits the event .emit('event name')
emitter.emit('response','john', 34)


