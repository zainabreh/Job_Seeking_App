import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const RecuiterLayout = ({role}) => {
const {user,isAuthenticated} = useSelector(v=>v.auth)

    if(!isAuthenticated || role !== user.roles){
      return   <Navigate path={'/login'}/>
    }
    


  return (
    <>
      <Outlet/>
    </>
  )
}

export default RecuiterLayout
