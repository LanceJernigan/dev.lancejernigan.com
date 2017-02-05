import {createStore,combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import menuReducer from './components/menu/reducer'

export const store = createStore(combineReducers({
	menu: menuReducer,
	routing: routerReducer
}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store