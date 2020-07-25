import React, {useState} from 'react'

import {Navbar} from './components'
import Routes from './routes'
import SideBar from './components/SideBar'
import {LengthComp} from './components/LengthComp'

const App = () => {
  const [cable, getCableLength] = useState('')

  const addLength = length => {
    getCableLength(...cable, {length: length})
  }
  return (
    <div>
      <Navbar />
      <Routes />
      <div className="sidenav">
        <SideBar />
      </div>
      <LengthComp addLength={addLength} />
    </div>
  )
}

export default App
