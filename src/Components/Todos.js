import React from 'react'
import {TodoItem} from "./TodoItem";
import style from "../App.css";




export const Todos = (props) => {
  let myStyle={
    min_height: "20vh",
    // backgroundImage: `url("/bg1.jpg")`,
    
  }
  let mystyle={
    height: "25vh"
  }

  return (
    <div className="container my-3" style={style}>
      <hr />
      <h3 className=" my-4">Todos List </h3>
      
      {props.todos.length===0 ? <div>
        <h3 className="noitem text-center my-4" style={mystyle}>
        No todo item left
          </h3> 
      </div> :


      // Here we accepting "todos" variable from app.js to Todos.js as prop element. So to use it we write props.todos, that's why here props.todos.map is written 
      //  map function takes arguments and returns array 
      props.todos.map((todo)=>{
        return (
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        )
      })
    }
      {/* Syntax explantion
       {props.todos.map((each_element)=>{
       return <TodoItem Argumentname1_for_TodoItem.js = {value that it pass, here its each_element}>  Argumentname2_for_TodoItem.js = {value that it pass}*/}
    </div>
  )
}
