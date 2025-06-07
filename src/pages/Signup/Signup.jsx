import React,{useEffect, useState} from 'react'
import styles from "./Signup.module.css"
import { Link ,useNavigate} from 'react-router-dom';


const Signup = () => {
  const [userData,setUserdata] = useState({
    name : "",
    email:"",
    password:"",
});
const navigate = useNavigate();
const storeData= ()=>{
  //for multi users accessibility
if(!userData.email ||!userData.name ||! userData.password){
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
  let userDatas = JSON.parse(localStorage.getItem("userDatas"))//getting from localstorage 
  if(!userDatas){
    userDatas = []
  }
  if(userDatas.some((obj)=>obj.email == userData.email)){
    alert("Already exists")
    return
    
 
}
  userDatas.push(userData)
  localStorage.setItem("userDatas",JSON.stringify(userDatas))
  
  navigate('/login')

}

  return (
   
  <div className={styles.formcontainer}>  
  <div className = {styles.container}>
    <input className = {styles.namebox}
    type="text"
    required
    value = {userData.name}
    onChange={(e)=>{
        setUserdata({...userData, name: e.target.value})
    }}
    placeholder='Enter your name'
    />
    
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
    <button className={styles.submitbutton} onClick={storeData}>SignUp</button>
    <Link to = '/login' className={styles.link}>Already have an account? Login Now!</Link>
    </div>
     </div>
    
  )
}

export default Signup