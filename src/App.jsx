
import './App.css'
import { Navbar } from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import {Aboutus} from './Components/Aboutus'
import {Contact} from './Components/Contact'
import {Product} from './Components/Product'

function App() {


  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/Aboutus' element={<Aboutus></Aboutus>}/>
      <Route path='/Product' element={<Product></Product>}/>
      <Route path='/Contact' element={<Contact></Contact>}/>
    </Routes>
    </>
  )
}

export default App
