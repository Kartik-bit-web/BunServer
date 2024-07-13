Bun.listen({
    hostname: '127.0.0.1',
    port: 8080,
    socket: {
        data(socket, data) {
            // console.log(data)
        }, // message received from client
        open(socket) {
            console.log("Opneded: ", socket.remoteAddress)
        }, // socket opened
        close(socket) {
            console.log("Connection Closed")
        }, // socket closed
        drain(socket) {

        }, // socket ready for more data
        error(socket, error) {
            console.log("Something Error!!")
        }, // error handler
    }
})