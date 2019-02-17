import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, 
    //applyMiddleware
} from 'redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
//import ReduxThunk from 'redux-thunk'
import reducers  from './reducers'
import HomePage from './scenes/home-page/home-page'
import ChooseSettings from './scenes/choose-settings/choose-settings'
import './index.css'

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path = '/' component={HomePage} />
        <Route exact path = '/choose-settings' component={ChooseSettings} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)