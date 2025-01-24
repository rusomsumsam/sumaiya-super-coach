
import { Outlet } from 'react-router-dom'
import Navbar from './all-components/navbar/Navbar'
import './App.css'
import TopMarquee from './all-components/top-marquee-comp/TopMarquee'




function App() {
  
  return (
    <>
      <div className='for_bg'>
        <TopMarquee></TopMarquee>
        <Navbar></Navbar>
        <Outlet></Outlet>
        
      </div>
    </>
  )
}

export default App
