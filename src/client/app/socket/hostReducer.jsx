import connect from './socket.jsx'

export function hostReducer(state = [], action) {
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

export function connectReducer(state = [], action) {
    switch (action.type) {
        case 'connected':
            return  Object.assign({}, state, {
                'connected' : action.payload
            });
        default:
            return state
    }
}
