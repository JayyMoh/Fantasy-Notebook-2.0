import React from 'react'
import Devy from './Components/Devy/Devy'
import AddDevy from './Components/Devy/AddDevy'
import EditDevy from './Components/Devy/EditDevy'
import Veteran from './Components/Veterans/Veteran'
import AddVeteran from './Components/Veterans/AddVeteran'
import EditVeteran from './Components/Veterans/EditVeteran'
import Rookie from './Components/Rookies/Rookie'
import AddRookie from './Components/Rookies/AddRookie'
import EditRookie from './Components/Rookies/EditRookie'
import Home from './Components/Home/Home'
import { Route, Link } from 'react-router-dom'
import NavBar from './Components/Navbar/NavBar'
import { Styled } from 'styled-components'

function App() {
    return <div className="App">
      <NavBar />
      <br />
      <Route exact path='/' component={ Home } />
      <Route exact path='/rookies' component={ Rookie } />
      <Route exact path='/add_rookie' component={ AddRookie } />
      <Route exact path='/edit_rookie' component={ EditRookie } />
      <Route exact path='/devys' component={ Devy } />
      <Route exact path='/add_devy' component={ AddDevy } />
      <Route exact path='/edit_devy' component={ EditDevy } />
      <Route exact path='/veterans' component={ Veteran } />
      <Route exact path='/add_veteran' component={ AddVeteran } />
      <Route exact path='/edit_veteran' component={ EditVeteran } />
    </div>
}

export default App;
