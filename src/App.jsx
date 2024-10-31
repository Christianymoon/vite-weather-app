// import { useState } from 'react'

import { Principal } from './pages/Principal'
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Navigate to="/weather"/> }></Route>
          <Route path="/weather" element={<Principal />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
