import './App.css';
import Header from "./Components/Header";
import {Todos} from "./Components/Todos";
import {Footer} from "./Components/Footer";
import {About} from "./Components/About";
import React, { useEffect, useState } from 'react';
import { AddTodo } from './Components/AddTodo';
// adding react router - this helps to jump from one page to another without reloading it
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  let initTodo;
  // if todos is NULL then,
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  // this is not basic HMTL, its JSX(javascript extension) which is combined version of both html and js

  const onDelete = (todo)=>{
    console.log("Buttoon deleted virtually, hehe", todo);

    // Deleting in this way doesnot work in react, as it doesnot changes the DOM html
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);


    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));

    // saving todo item in "todos" whenver we delete an item
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // we will add title and desc to list using this function
  const addTodo=  (title,desc)=>{
    console.log("Adding this todo", title,desc)

    // If we delete all todo item then to reintialize sno, we do following
    let sno ;
    if(todos.length == 0){
      sno = 1
    }
    else{
      sno = todos[(todos.length)-1].sno + 1
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    // now this is only object, to add it in list, we need to append this to "todos" list
    setTodos([...todos, myTodo]);
    console.log(myTodo)
    
  }

  // Main list whose item got displayed
  // also pass initTodo variable, which saves the list to local storage, and useState is used to change the list in real time
  const [todos, setTodos] = useState(initTodo);
      // Now if we want to store the todo list in local storage even after reloading the page then its better to take empty list
    
      // useeffect is called whenever "todos" is changed
    useEffect(() => {
      // saving todo item in "todos" whenver we add an item
    localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])
    


  return (
    
    // NOTE: whatever you want to return it should be wrapped in some tag, if there is not any such tag, then just put blank tags(<> ........body........</>)
    <>
    <Router>
    <Header title = "Mera Todo List"/>  
    {/* Using props for passing title from parent(app.js) to child component(header.js) */}

    <Switch>
      {/* when path = "/" then only we render addTodo and Todos */}
      {/* if we dont write exact here, then it also consider slasj(/) of other path also, and this may cause problems */}
          <Route exact path="/" render={()=>{
            return(
                <>
                <AddTodo addTodo = {addTodo}/>
                <Todos todos = {todos} onDelete= {onDelete}/> 
                </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>


    {/* Sending the variable "todos" variable to todos.js */}
    <Footer/>
    </Router>
    </> 


  );
}

export default App;
