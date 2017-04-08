import store from '../index.jsx';
import newMsg from './action.jsx';
import {actionConnected} from '../login/actionConnect.jsx'

const net = require('net');

var socket = new net.Socket()
socket.setEncoding('utf8')

var messageList = []

socket.on('data', function (data) {
    data.split('\n').map((t) => {
        if (t.length > 1) {
            store.dispatch(newMsg(t))
        }
    })
});

socket.on('connect', () => {
    store.dispatch(actionConnected())
});

export function connect(host, port) {
    socket.connect({
        'port' : port
    ,   'host': host
    });
}
export function send(message) {
  socket.write(message + '\n')
}
