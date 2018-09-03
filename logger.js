var url = 'https://sulthonulmubarok.com/';

const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message){
        console.log(message);
    
        this.emit('event', {id: 1, url:'http://'});
    }
}

module.exports = Logger;
module.exports.endPoint = url;