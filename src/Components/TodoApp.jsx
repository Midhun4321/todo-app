import React from 'react'
import "./TodoApp.css";
function TodoApp() {
  
  return (
    <div className='todo-container'>
        <h1>Todo App</h1>

    <div className='input-section'> 
        <input type="text" placeholder='user name' />
        <button>Add</button>
    </div >
    <div className='section-one'>
    <input type="text" placeholder='email' />
        <button>Add</button>

    </div>

    <div className='section-two'>
    <input type="text" placeholder='password' />
        <button>Add</button>

    </div>
        
    </div>
  )
}

export default TodoApp