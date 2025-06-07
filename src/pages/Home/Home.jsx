import React from 'react'
import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate  = useNavigate();

  const loginNow=()=>{
    navigate('/login');
  }
    const handleSignup=()=>{
    navigate('/signup');
  }
  return (
    <>
   
     <div className={styles.homeContainer}>
       
      <div className={styles.overlay}></div>
      <div className={styles.content}>
       
        <h1 className={styles.main}>Todo</h1>
         <div className={styles.buttonContainer}>
        <button className={styles.loginbtn}onClick={loginNow}>Login</button>
        <button className={styles.signupbtn}onClick={handleSignup}>Sign Up</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default Home