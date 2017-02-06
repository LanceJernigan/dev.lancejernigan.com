import {UPDATE_PAGE} from './actions'

const initialState = {
    scroll: {
        top: 0
    }
}

const pageActions = {
    'default': state => state,
    [UPDATE_PAGE]: (state, e) => ({
        scroll: {
            top: e.currentTarget.scrollTop
        }
    }),
}

const pageReducer = (state = initialState, action) => {

    const type = pageActions.hasOwnProperty(action.type) ? action.type : 'default'
    return pageActions[type](state,action.payload)

}

export default pageReducer