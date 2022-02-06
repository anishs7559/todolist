import React,{useState} from 'react';
import './App.css'
const App = () => {
  const [input,setInput]=useState([])
  const [value,setValue]=useState('')
  const [edit,setEdit]=useState('')
  const [todoEdit,setTodoEdit]=useState(null)
  
  function handleSubmit(e){
  e.preventDefault()
  setInput([...input,{ text:value,
    id:new Date().getTime(),
    complete:false}])
  setValue('')
  }
 function handleDelete(id){
   const updatedTodo=[...input].filter((todo)=>todo.id!==id)
   setInput(updatedTodo)
 }
 const handleToggle=(id)=>{
  
   const update =[...input].map((input)=>{
     
       if(input.id===id){
        input.complete=!input.complete
       }
       return input
     
   })
   setInput(update)
  
 }
 const editTodo=(id)=>{
  const update =[...input].map((todo)=>{
    if(todo.id===id){
      todo.text=edit
    }
    return todo
  })
  setInput(update)
  setTodoEdit(null)
  setEdit('')
 }
  return (
  <div>
    <form onSubmit={handleSubmit} >
  <input  onChange={(e)=>{setValue(e.target.value)}} value={value}/>
  <button type='submit'>add todo</button>
    </form>
   {input.map((todo)=>{
     return(
       <div 
      key={todo.id}>
          {todoEdit===todo.id?( <input value={edit} onChange={(e)=>{setEdit(e.target.value)}}/>):
          ( <div className={todo.complete?'strike':''} onClick={()=>{handleToggle(todo.id)}} >{todo.text}</div>)}
         
         {todoEdit===todo.id?(<button onClick={()=>editTodo(todo.id)}>submit</button>):
         (<button onClick={()=>setTodoEdit(todo.id)}>edit</button>)}
         <button onClick={()=>{handleDelete(todo.id)}}>delete</button>
     

         </div>
     )
   })}
  </div> 
  )
};

export default App;
