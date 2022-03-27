import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  // Here we can also accept arguments (todo and onDelete) as props and use them as props.todo and props.onDelete 
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button> 
      <hr />
    {/*  now if we write just {onDelete} then its just pass the function , and if write onDelete() then it calls the function 
    But we need the function to be passed, not called because it should run when button is pressed
    
    Now if we want to pass this function with agrument then we will call a function(arrow function) in which we pass that onDelete function*/}

    </div>
  )
}
