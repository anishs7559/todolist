import React,{useState} from 'react';
import './App.css'
const App = () => {
  const [input,setInput]=useState([])
  const [value,setValue]=useState('')
  
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
        <div className={todo.complete?'strike':''} onClick={()=>{handleToggle(todo.id)}} >{todo.text}</div>
         <button onClick={()=>{handleDelete(todo.id)}}>delete</button>

         </div>
     )
   })}
  </div> 
  )
};

export default App;
