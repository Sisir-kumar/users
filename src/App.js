import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import UsersContainer from './components/UsersContainer'
import UserContainer from './components/UserContainer'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App () {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <div className='App'>
              <Route path="/" exact>
                <UsersContainer />
              </Route> 
              <Route path="/:id" component={UserContainer} />
               
             
          </div>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
