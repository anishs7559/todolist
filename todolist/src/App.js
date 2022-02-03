import React,{useState} from 'react';

const App = () => {
  const [todo,setTodo]=useState([])
  const [todos,setTodos]=useState('')
  function handleSubmit(e){
  e.preventDefault()
  setTodo([...todo,{ text:todos,
    id:new Date().getTime(),
    complete:false}])
  setTodos('')
  }
  return (
  <div>
    <form onSubmit={handleSubmit} >
  <input  onChange={(e)=>{setTodos(e.target.value)}} value={todos}/>
  <button type='submit'>add todo</button>
    </form>
   {todo.map((newtodo)=>{
     return(
       
       <div key={newtodo.id}>{newtodo.text}</div>
     )
   })}
  </div> 
  )
};

export default App;
