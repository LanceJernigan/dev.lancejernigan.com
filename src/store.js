import {createStore,combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import sidebarReducer from './components/sidebar/reducer'
import pageReducer from './components/page/reducer'
import projectsReducer from './components/projects/reducer'

export const store = createStore(combineReducers({
	sidebar: sidebarReducer,
	page: pageReducer,
	routing: routerReducer,
	projects: projectsReducer
}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store