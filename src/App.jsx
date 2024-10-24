import React from 'react'
import About from './pages/About'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import Header from './components/Header'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>

  )
}
