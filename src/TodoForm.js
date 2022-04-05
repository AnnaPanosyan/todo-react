import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import "./TodoForm.css";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    addTodo(text, date);
    setText("");
  };

  return (
    <div className="form">
      <form onSubmit={handelSubmit}>
        
        <Stack component="form" noValidate spacing={3}>
          <TextField
            id="date"
            defaultValue={date}
            label="Date"
            type="date"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </Stack>
        <div className="inputBtn">
        <input
          className="input"
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className="addBtn" type="submit">
          Add
        </button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
