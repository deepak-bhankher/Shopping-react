import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import Top_Rated from './components/Top_Rated'
import Footer from './components/Footer'
import Kids_Wear from './components/Kids_Wear'
import Mens_Wear from './components/Mens_Wear'
import Womens_Wear from './components/Womens_Wear'



const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='Top_Rated' element={<Top_Rated/>}/>
      <Route path='Kids_Wear' element={<Kids_Wear/>}/>
      <Route path='Mens_Wear' element={<Mens_Wear/>}/>
      <Route path='Womens_Wear' element={<Womens_Wear/>}/>


     
      </Routes>
 <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App
