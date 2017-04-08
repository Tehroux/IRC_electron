import {connect, send} from './socket.jsx'

const initialState = {connected: false}

export function hostReducer(state = initialState, action) {
        switch(action.type) {
            case 'hostEntered':
                connect(action.payload.host, action.payload.port)
                return Object.assign({}, state, {
                    'host': action.payload.host
                ,   'port': action.payload.port
                })
            default:
                return state
        }
}

export function connectReducer(state = initialState, action) {
    switch (action.type) {
        case 'connected':
            return  Object.assign({}, state, {
                'connected' : action.payload
            });
        default:
            return state
    }
}

export function sendMessage(state = {}, action) {
  switch (action.type) {
    case 'SEND':
      send(action.payload);
      return state;
    default:
      return state;
  }
}
