export const actionConnect = (host, port) => {
    return {
        "type" : "hostEntered"
    ,   "payload": {host, port}
    }
}

export const actionConnected = () => {
    return {
        "type" : "connected"
    ,   "payload" : true
    }
}
