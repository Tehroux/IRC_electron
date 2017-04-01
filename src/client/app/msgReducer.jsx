import React from 'react'

function msgReducer(state, action) {
    switch (action.type) {
        case 'NEW_MSG':
            return [...state, action.payload]
        default:
            return state
    }
}

export default msgReducer;
