import {SET_HEADER} from './actions'

const initialState = {
    active: false,
    hidden: false,
    color: '#FFF'
}

const headerActions = {
    'default': state => state,
    [SET_HEADER]: (state, payload) => {

        return {
            ...state,
            ...payload
        }

    },
}

const headerReducer = (state = initialState, action) => {

    const type = headerActions.hasOwnProperty(action.type) ? action.type : 'default'
    return headerActions[type](state, action.payload)

}

export default headerReducer