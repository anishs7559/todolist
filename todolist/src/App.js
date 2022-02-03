import React,{useState} from 'react';

const App = () => {
  const [todo,setTodo]=useState([])
  const [todos,setTodos]=useState('')
  const [edit,setEdit] =useState([])
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
  return (
  <div>
    <form onSubmit={handleSubmit} >
  <input  onChange={(e)=>{setTodos(e.target.value)}} value={todos}/>
  <button type='submit'>add todo</button>
    </form>
   {todo.map((newtodo)=>{
     return(
       
       <div key={newtodo.id}>{newtodo.text} <button onClick={()=>{handleDelete(newtodo.id)}}>delete</button> <button>edit</button></div>
     )
   })}
  </div> 
  )
};

export default App;
