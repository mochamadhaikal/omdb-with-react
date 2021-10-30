import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'
import Footer from './Footer'

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/movies/:id' children={<Movie />} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
