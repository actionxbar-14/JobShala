import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import JobListPage from './pages/JobListPage'
import JobApplyPage from './pages/JobApplyPage'
import JobStatusPage from './pages/JobStatusPage'
import Home from './components/Home'
import Footer from './components/Footer'
import JobDashboard from './pages/JobDashboard'

const App = () => {


  return (
  
      <>
        
       <Router>
       <Navbar/>
        
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Joblist" element={<JobListPage/>}/>
            <Route path="/apply/:id" element={<JobApplyPage/>}/>
            <Route path='/status' element={<JobStatusPage/>}/>
            <Route path='/JobDashboard' element={<JobDashboard/>}/>
          </Routes>

          <Footer/>

          
       </Router>
      
      </>
     

  )
}

export default App
