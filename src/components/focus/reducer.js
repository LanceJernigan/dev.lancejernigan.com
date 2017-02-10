import {UPDATE_FOCUS} from './actions'

const initialState = {
    position: {
        top: 0,
        left: 0
    }
}

const focusActions = {
    'default': state => state,
    [UPDATE_FOCUS]: (state, e) => ({
        position: {
            top: 0,
            left: 0
        }
    }),
}

const focusReducer = (state = initialState, action) => {

    const type = focusActions.hasOwnProperty(action.type) ? action.type : 'default'
    return focusActions[type](state, action.payload)

}

export default focusReducer