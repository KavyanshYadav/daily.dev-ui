import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Home,Navbar, SiderBar} from './components/Home';
import Blog from './components/Blog';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className='bg-primary flex flex-row min-h-screen min-w-[90vh] overflow-x-scroll '>
            <SiderBar/>
           
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blog' element={<Blog/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
