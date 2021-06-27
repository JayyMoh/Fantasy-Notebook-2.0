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
import Home from './Components/Home'

function App() {
    return <div className="App">
      <Home />
      <Devy />
      <AddDevy />
      <EditDevy />
      <Veteran />
      <AddVeteran />
      <EditVeteran />
      <Rookie />
      <AddRookie />
      <EditRookie />
    </div>
}

export default App;
