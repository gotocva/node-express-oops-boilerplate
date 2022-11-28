



export default class SocketConfig {

    constructor() { }

    /**
     * 
     * @param {*} socket 
     */
    onConnection(socket) {
        socket.emit('greeting-from-server', {
            greeting: 'Hello Client'
        });
        socket.on('greeting-from-client', function (message) {
          console.log(message);
        });
    }
}