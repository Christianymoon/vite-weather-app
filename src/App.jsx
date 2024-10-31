// import { useState } from 'react'

import { Principal } from './pages/Principal'
import {Route, Routes, BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
