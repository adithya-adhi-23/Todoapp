import React,{useState} from 'react'
import styles from "./Login.module.css"
import { useEffect } from 'react';
import { Link ,useNavigate} from 'react-router-dom';

const Login= () => {
  const [userData,setUserdata] = useState({
    email:"",
    password:"",
});
const navigate = useNavigate();

 useEffect(()=>{

  if(localStorage.getItem("loggedInUser"))
    navigate('/todo')
  
  })

const storeData= ()=>{
  if(!userData.email ||! userData.password){
  alert("Fill out the required fields")
  return;
}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(userData.email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (userData.password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }
  //for multi users accessibility
  let userDatas = JSON.parse(localStorage.getItem("userDatas"))//getting from localstorage 
  if(!userDatas){
    userDatas = []
  }
 if(userDatas.some((obj)=>obj.email == userData.email && obj.password == userData.password))
{
  let user = userDatas.filter((obj)=>obj.email == userData.email)[0]
  localStorage.setItem("loggedInUser",JSON.stringify(user))
  navigate('/todo');
}
else{ 
  alert("Login failed")
}
 
}
  return (
   
  <div className={styles.formcontainer}>  
  <div className = {styles.container}>
    
    <input 
    type="text"
    className={styles.emailform}
    required
    value = {userData.email}
    onChange={(e)=>{
        setUserdata({...userData, email: e.target.value})
    }}
    placeholder='Enter your email address' />
    
    <input 
    type="password"
    required
     value = {userData.password}
    onChange={(e)=>{
        setUserdata({...userData, password: e.target.value})
    }}
    placeholder='Enter your password'
    className={styles.password} />
    <button className={styles.submitbutton} onClick={storeData}>Login</button>
    <Link to = '/signup' className={styles.link}>Don't have an account? Signup Now!</Link>
    </div>
     </div>
    
  )
}

export default Login