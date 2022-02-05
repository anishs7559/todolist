import React,{useState} from 'react';
import './App.css'

const App = () => {
  const [todo,setTodo]=useState([])
  const [todos,setTodos]=useState('')
  const [edit,setEdit] =useState('')
  function handleSubmit(e){
  e.preventDefault()
  setTodo([...todo,{ text:todos,
    id:new Date().getTime(),
    complete:false}])
  setTodos('')
  }
 function handleDelete(id){
   const updatedTodo=[...todo].filter((todo)=>todo.id!==id)
   setTodo(updatedTodo)
 }
 const handleEdit=(id)=>{
   const update = {
     id:new Date().getTime(),
     text:edit,
     complete:false

   }
   setTodo([...todo].concat(update))
 }
  return (
  <div>
    <form onSubmit={handleSubmit} >
  <input  onChange={(e)=>{setTodos(e.target.value)}} value={todos}/>
  <button type='submit'>add todo</button>
    </form>
   {todo.map((newtodo)=>{
     return(
       
       <div 
      key={newtodo.id}>
        <div >{newtodo.text}</div>
         <button onClick={()=>{handleDelete(newtodo.id)}}>delete</button>
         <input type="text" onChange={(e)=>setEdit(e.target.value)} />
          <button onClick={()=>{handleEdit(todo.id)}}>edit</button></div>
     )
   })}
  </div> 
  )
};

export default App;
