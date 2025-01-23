
import { Outlet } from 'react-router-dom'
import Navbar from './all-components/navbar/Navbar'
import './App.css'

function App() {
  
  return (
    <>
      <div className='for_bg'>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
