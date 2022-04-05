import React from "react";
import "./DateList.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TodoItem from "./TodoItem";

import TodoEditItem from "./TodoEditItem";

function DateList({ todos, onDelete ,onChange, edit, addTodo}) {
  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography component={"div"}>{todo.value}</Typography>
              </AccordionSummary>
              {todo.date.map((item) => {
                return (
                  <div key={item.id}>
                    <AccordionDetails>
                      <Typography component={"div"}>
                       
                        <TodoItem
                          todoId={todo.id}
                          item={item}
                          onDelete={onDelete}
                          onChange={onChange}
                          edit={edit}
                        />
                      </Typography>
                    </AccordionDetails>
                  </div>
                );
              })}
            </Accordion>
          </div>
        );
      })}
    </>
  );
}

export default DateList;
