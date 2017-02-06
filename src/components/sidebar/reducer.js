import {TOGGLE_SIDEBAR} from './actions'

const initialState = {
    active: false
}

const sidebarActions = {
    'default': state => state,
    [TOGGLE_SIDEBAR]: state => ({...state, active: ! state.active}),
}

const sidebarReducer = (state = initialState, action) => {

    const type = sidebarActions.hasOwnProperty(action.type) ? action.type : 'default'
    return sidebarActions[type](state,action.payload)

}

export default sidebarReducer