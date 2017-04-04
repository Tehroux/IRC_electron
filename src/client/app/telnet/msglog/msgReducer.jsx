import React from 'react'

const initialState = {msgList: []}

function msgReducer(state = initialState, action) {
    switch (action.type) {
        case 'NEW_MSG':
            return {msgList: [...state.msgList, action.payload]}
        default:
            return state
    }
}

export default msgReducer;
