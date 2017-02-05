import {TOGGLE_MENU} from './actions'

const initialState = {
    active: false
}

const menuActions = {
    'default': state => state,
    [TOGGLE_MENU]: (state, menu) => Object.assign(state, menu),
}

const menuReducer = (state = initialState, action) => {

    const type = menuActions.hasOwnProperty(action.type) ? action.type : 'default'
    const newState = menuActions[type](state,action.payload)

    console.log('NEW STATE', newState)

    return newState

}

export default menuReducer