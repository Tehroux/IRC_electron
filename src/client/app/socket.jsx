import store from './index.jsx';
import newMsg from './action.jsx';

const net = require('net');

var socket = new net.Socket()

var messageList = []

socket.setEncoding('utf8')

socket.connect({
    'port' : '8088'
    , 'host': 'crismos.fr'
});

socket.on('data', function (data) {
    data.split('\n').map((t) => store.dispatch(newMsg(t)))
});
