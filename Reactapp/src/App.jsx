import './App.css'
import './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Login from './Components/Login'
import SignUpForm from './Components/SignUpForm'
import About from './Components/About'
import Contact from './Components/Contact'
import Dashboard from './Components/Dashboard'
// import Crime_Layout from './Crime/Crime_Layout'
// import Crime_Navbar from './Crime/Crime_Navbar'
// import Crime_View from './Crime/Crime_View'
// import Sidebarcrime from './Crime/Sidebarcrime'
// import Blog from './components/Blog'
// import Shop from './components/Shop'
// import Venders from './components/Venders'
// import Contact from './components/Contact'

function App() {
  
    return(
     <BrowserRouter>
         <Routes>
           <Route path='/' element={<Layout/>}>
           <Route  path="/" index element={<Home/>} />
           <Route  path="/Login" index element={<Login/>} />
           <Route  path="/SignUpForm" index element={<SignUpForm/>} />
           <Route  path="/About" index element={<About/>} />
           <Route  path="/Contact" index element={<Contact/>} />
           <Route  path="/Dashboard" index element={<Dashboard/>} />
           </Route>
           </Routes> 
    </BrowserRouter>
   )
}
export default App


