// import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
// import DeleteAllUsers from './components/DeleteAllUsers'
import UserDetails from './components/UserDetails'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
     <UserDetails/>
    </>
  )
}

export default App
