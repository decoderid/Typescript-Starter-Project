interface HelloWorld {
    response: string
}

const createMessage = (message: string): HelloWorld => {
    return {
        response: message
    }
}

console.log(createMessage('test').response)