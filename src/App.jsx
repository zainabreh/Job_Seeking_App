import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import UserDashBoard from './pages/UserDashBoard'
import Updateprofile from './component/Updateprofile'
import Layout from './component/Layout'
import UsepProfileCard from './component/UsepProfileCard'

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route  path='/userdashboard' element={<UserDashBoard/>}></Route>
        <Route  path='/usepProfileCard' element={<UsepProfileCard/>}></Route>
        <Route  path='/updateprofile' element={<Updateprofile/>}></Route>
      </Route>
    )
  )



  return (

    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
