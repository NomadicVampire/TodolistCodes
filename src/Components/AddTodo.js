import React, { useState } from 'react';
import bgimg from "./bg1.jpg";

let bgstyle = {
  
}
export const AddTodo = (props) => {
  // varibles for title and desc and changing their states
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // function for adding title and desc in the list
  const submit = (e)=>{
    //  To prevent the page from bieng reloading on clicking submit
    e.preventDefault();

    if(!title || !desc){
      alert("Title or Descrition cannot be blank")
    }
    else{
    // calling this function of App.js to adding this data to list
    props.addTodo(title,desc);
    
    // this makes text bar empty whenver new todo item is added
    setTitle("")
      setDesc("")
  }

  }


  return (
    <div className="container my-3" style={{backgroungImage: `url(${bgimg})`}}>
      <h3>Add Todo Item</h3>
    <form onSubmit={submit}>
    <div className="input-group-sm mb-3">
      <label htmlFor="title" className="form-label">Todo Title</label>
      <input  type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title"/>
      {/* now if we write value={title} then we wont be able to change its value, as we fixed their assigned value, so sort out that we add onChange function */}
    </div>

    <div className="input-group-sm mb-2 widht-50">
      <label htmlFor="desc" className="form-label">Todo Description</label>
      <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
    </div>

    <button type="submit" className="btn btn-success btn-sm">Add Todo Item</button>
  </form>
  </div>
  )
}
