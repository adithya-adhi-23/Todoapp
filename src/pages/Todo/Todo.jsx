import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Todo.module.css'
import { BsTrash3 } from "react-icons/bs";
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
  const [currentUser, setcurrentUser] = useState(()=>{
    let user = localStorage.getItem("loggedInUser");
     return user ? JSON.parse(user):null;
 });
  const [userTodos, setUserTodos] = useState([])
  const navigate = useNavigate();
  const [currentTodo, setCurrentTodo] = useState(
    {
      id: uuidv4(),
      title: "",
      isCompleted: false,
    }
  )

  useEffect(() => {

    if (!localStorage.getItem("loggedInUser")){
      navigate('/login'); 
    return;}

    let todoData = JSON.parse(localStorage.getItem("todoData"))
    if (!todoData) {
      todoData = {};
      localStorage.setItem("todoData", JSON.stringify({}));
    }
    if(currentUser){
    let localUserTodos = todoData[currentUser.email]
    if (localUserTodos) {
      setUserTodos(localUserTodos);
    }}
  }, [navigate]
  );
  const updateTodo=() =>{
     if(currentTodo.title.trim() == ""){
      alert("Nothing to add");
      return;
     }
        let todoData = JSON.parse(localStorage.getItem("todoData"))
        todoData[currentUser.email] =[...userTodos,currentTodo]

          setUserTodos([...userTodos,currentTodo])
          localStorage.setItem("todoData",JSON.stringify(todoData));
          setCurrentTodo({
              id: uuidv4(),
              title: "",
              isCompleted: false,
         })
    }
  
  const deleteId=(id)=>{
    let filteredTodo = userTodos.filter((todo)=>todo&&todo.id != id)
    let todoData = JSON.parse(localStorage.getItem("todoData"))
        todoData[currentUser.email] = filteredTodo
         setUserTodos(filteredTodo)
          localStorage.setItem("todoData",JSON.stringify(todoData))
  }
  const todoDone = (id,status)=>{
    console.log(id,status)
   const upDateTodo = userTodos.map(todo=>{
    if(todo&&todo.id == id){
        return{...todo,isCompleted:status}
    }return todo;

    })
        let todoData = JSON.parse(localStorage.getItem("todoData"))
        todoData[currentUser.email] = upDateTodo
        setUserTodos(upDateTodo)
        localStorage.setItem("todoData",JSON.stringify(todoData))
  }
   
  return (
    <>{currentUser&&(
      <p className={styles.userName}>{currentUser.name.charAt(0).toUpperCase() + currentUser.name.slice(1)}'s Todos </p>)}
      <div className={styles.maincontainer}>
        <div className={styles.formcontainer}>

          <input type="text" className={styles.inputfield} value={currentTodo.title} onChange={(e) => { setCurrentTodo({ ...currentTodo, title: e.target.value }) }} />
          <button onClick={updateTodo}> Add Todo</button>
       
        </div>
        <div className={styles.Todocontainer}>
          {userTodos && userTodos.map((todos)=>(todos&&
          <div key= {todos.id} className={styles.todo}>
            <input checked={todos.isCompleted} onChange={(e)=>todoDone(todos.id,e.target.checked)}type="checkbox" className={styles.checkboxontainer} />
            <p className={`${styles.text} ${todos.isCompleted ? styles.strike : ""}`}>{todos.title}</p>
            <button onClick={()=>deleteId(todos.id)}className={styles.deletebtn}><BsTrash3 /></button>
          </div>
          ))}
        </div>


      </div>
      <button className={styles.logoutBtn} onClick={() => {
        localStorage.removeItem("loggedInUser")
        navigate('/login')
      }
      }>Logout</button>
    </>
  )
}

export default Todo