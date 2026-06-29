import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import {Button} from '@/components/ui/button'
import Home from './Pages/Home/Home'
import NavBar from './Pages/NavBar/NavBar'
import { Routes,Route } from 'react-router-dom'
import ProjectDetail from './Pages/ProjectDetails/ProjectDetail'
import IssueDetail from './Pages/IssueDetails/IssueDetail'
import Subscription from './Pages/Subscription/Subscription'
import Auth from './Pages/Auth/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from './Redux/Auth/Action'
import { fetchProjectS } from './Redux/Project/Action'
import ChatBox from './Pages/ProjectDetails/ChatBox'
import AcceptInvitation from './Pages/Project/AcceptInvitation'

function App() {
  const dispatch=useDispatch();

  const {auth}=useSelector(store=>store)

  useEffect(()=>{
    dispatch(getUser())
    dispatch(fetchProjectS({}))
  },[auth.jwt])
  console.log("user is",auth)


  return (
    <>
  {auth.user?
   <div>
   <NavBar />
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/project/:id" element={<ProjectDetail/>}/>
   <Route path="/project/:projectId/issue/:issueId" element={<IssueDetail/>}/>
   <Route path="/upgrade_plan" element={<Subscription/>}/>
   <Route path="/accept_invitation" element={<AcceptInvitation/>}/>
   </Routes>
   </div>:<Auth/>
   }
  
  

    
    </>
  )
}

export default App
