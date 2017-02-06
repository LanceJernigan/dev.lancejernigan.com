import React from 'react'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import store from './store'
import App from './components/app/'

import About from './components/about/'
import Projects from './components/projects/'

const history = syncHistoryWithStore(browserHistory, store)

const routes = (
	<Provider
		store={store}
	>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={About} />
				<Route exact={true} path="/about" component={About} />
				<Route path="/projects/" component={Projects} />
				<Route path="/projects/:id" component={Projects} />
			</Route>
		</Router>
	</Provider>
)

export default routes