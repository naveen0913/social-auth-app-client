import React, { useContext } from 'react'
import Signup from './Signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import { myContext } from './Context'



const App = () => {

  const userObject=useContext(myContext)
  console.log(userObject);
  
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
      {/*  <Route path='/login' element={<Login/>}></Route>  */}
        <Route path='/home' element={<Home/>} ></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App