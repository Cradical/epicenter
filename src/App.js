import React from 'react'
import { Switch, Route } from 'react-router-dom'

import EpicenterNavbar from './components/Navbar'
import Lockscreen from './components/Lockscreen'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/lockscreen'>
          <Lockscreen />
        </Route>
        <Route path='/app'>
          <EpicenterNavbar />
        </Route>
      </Switch>
    </div>
  )
}

export default App
