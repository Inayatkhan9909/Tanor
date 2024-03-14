
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Footer from './components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import AddItem from './Admincomponents/AddItem'
import AdminPage from './Admincomponents/AdminPage'
import Loader from './components/Loader'
import Menu from './components/Menu'

const App = () => {

  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Login' element={<Login/>}/>
         <Route path='/Register' element={<Register/>}/>
         <Route path='/admin/additem' element={<AddItem/>} />
         <Route path='/admin' element={<AdminPage/>} />
         <Route path='/loader' element={<Loader/>} />
         <Route path='/menu' element={<Menu/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App