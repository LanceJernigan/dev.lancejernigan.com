import {createStore,combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import headerReducer from './components/header/reducer'
import sidebarReducer from './components/sidebar/reducer'
import focusReducer from './components/focus/reducer'
import pageReducer from './components/page/reducer'
import projectsReducer from './components/projects/reducer'

export const store = createStore(combineReducers({
	header: headerReducer,
	sidebar: sidebarReducer,
	focus: focusReducer,
	page: pageReducer,
	routing: routerReducer,
	projects: projectsReducer
}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store