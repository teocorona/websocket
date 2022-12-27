

const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id)
    })

    socket.on('send-msg', (payload, callback) => {
        payload.name = 'teocorona'
        const id = 123
        callback(id)

        socket.broadcast.emit('send-msg', payload)
    });

}

module.exports = {
    socketController
}