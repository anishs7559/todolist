import React,{useState} from 'react';

const App = () => {
  const [todos,setTodos] =useState([])
  const [todo,setTodo] = useState('')
  const handleSubmit =(e)=>{
    e.PreventDefault()
    const newTodo ={
      id:new Date().getTime(),
      text:todo,
      complete:false
    }
    setTodos([...todos].concat(newTodo))
    setTodo('')
  }
  return(
   <div>
   <form onSubmit={handleSubmit} >
     <input onChange={(e)=>setTodo(e.target.value)} value={todo}/>
     <button>add todo</button>
   </form>
  
  {todos.map(todo=>{
    console.log(todo.text);
    return(
      
     <h1>{todo.text}</h1>
      
    )
  })}
    
  </div>
  )
};

export default App;
