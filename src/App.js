import React, { useState } from "react";
import "./App.css";
import DateList from "./DateList";
import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = useState([
    //   {
    //   id:Math.random(),
    //   value:"12.11.2022",
    //   date:[
    //     {
    //       id:Math.random(),
    //       text:"learn raect",
    //       complated:false
    //     },
    //     {
    //       id:Math.random(),
    //       text:"learn js",
    //       complated:false
    //     },
    //     {
    //       id:Math.random(),
    //       text:"learn node",
    //       complated:false
    //     }
    //   ]
    // },
    // {
    //   id:Math.random(),
    //   value:"10.11.2022",
    //   date:[
    //     {
    //       id:Math.random(),
    //       text:"learn html",
    //       complated:false
    //     },
    //     {
    //       id:Math.random(),
    //       text:"css",
    //       complated:false
               //editItem:false
    //     }
    //   ]
    // }
  ]);
  function onChange(newItem, id){
     setTodos(todos.map(todo=> id===todo.id ? {...todo, date:todo.date.map(item=> item.id===newItem.id ? newItem : item)} : todo))
  }

  function addTodo(text, newDate) {
    const newItem = {
      id: Math.random(),
      value: newDate,
      date: [
        {
          id: Math.random(),
          text: text,
          complated: false,
          editItem:false
        },
      ],
    };

    let arr = todos.filter((todo) => todo.value === newDate);
    setTodos(
      arr.length
        ? todos.map((todo) =>
            todo.value ===newDate
              ? { ...todo, date: [...todo.date, newItem.date[0]] }
              : { ...todo }
          )
        : [...todos, newItem]
    );
  
  }
  function edit(newItem, id) {
    setTodos(todos.map(todo=> id===todo.id ? {...todo, date:todo.date.map(item=> item.id===newItem.id ? newItem : item)} : todo))
  }

  console.log(todos);

  function onDelete(id, todoId) {
    setTodos(
      todos
        .map((todo) =>
          todoId === todo.id
            ? { ...todo, date: todo.date.filter((item) => item.id !== id) }
            : { ...todo }
        )
        .filter((item) => item.date.length)
    );
  }

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <DateList todos={todos} onDelete={onDelete} onChange={onChange} edit={edit} addTodo={addTodo}/>
    </div>
  );
}
export default App;
