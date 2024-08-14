import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index path='/' element={<Home/>}></Route>
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
