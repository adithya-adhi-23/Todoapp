import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Todo = () => {

  const navigate = useNavigate();
  useEffect(()=>{

  if(!localStorage.getItem("loggedInUser"))
    navigate('/login')
  
  })
  return (
  <>
    <div>Todo</div>

    <button onClick ={()=>
      {
        localStorage.removeItem("loggedInUser")
        navigate('/login')
      }
    }>Logout</button>
   
      </>
  )
}

export default Todo