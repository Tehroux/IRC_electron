import store from '../index.jsx';
import newMsg from './action.jsx';
import {actionConnected} from '../login/actionConnect.jsx'

const net = require('net');

var socket = new net.Socket()
socket.setEncoding('utf8')

var messageList = []

function connect(host, port) {
    socket.connect({
        'port' : port
    ,   'host': host
    });
}

socket.on('data', function (data) {
    console.log(data);
    data.split('\n').map((t) => store.dispatch(newMsg(t)))
});

socket.on('connect', () => {
    store.dispatch(actionConnected())
});

export default connect;
