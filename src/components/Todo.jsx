import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./todo.module.css";
import { TodoList } from "./TodoList";
import { addTodo, toggleTodo, deleteTodo, editTodo } from "../store/Action";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Todo = () => {
  const [title, setTitle] = useState("");
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleADD = () => {
    const addToDoAction = addTodo(title);
    dispatch(addToDoAction);
    setTitle("");
  };

  const handleToggle = (payload) => {
    const toggleToDoAction = toggleTodo(payload);
    dispatch(toggleToDoAction);
  };

  const handleDelete = (payload) => {
    const deleteToDoAction = deleteTodo(payload);
    dispatch(deleteToDoAction);
  };

  const [editInput, setEditInput] = useState({});

  const handleEdit = (toEdit) => {
    setEditInput(toEdit);
    handleOpen();
  };

  const saveEditTodo = (payload) => {
    const action = editTodo(payload);
    dispatch(action);
    handleClose();
  };

  return (
    <div className={styles.main}>
      <div className={styles.upperDiv}>
        <h3>Add Todo </h3>

        <div className={styles.InputBox}>
          <input
            class="form-control form-control-lg"
            type="text"
            placeholder="Type something..."
            aria-label=".form-control-lg example"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="button" class="btn btn-dark btn-lg" onClick={handleADD}>
            Add Task
          </button>
        </div>
      </div>

      <TodoList
        todos={todos}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit Todo
            </Typography>
            <div className={styles.modalBox}>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Type something..."
                aria-label=".form-control-lg example"
                value={editInput.title}
                onChange={(e) =>
                  setEditInput((prev) => ({ ...prev, title: e.target.value }))
                }
              />

              <button
                type="button"
                class="btn btn-dark btn-md"
                onClick={() => saveEditTodo(editInput)}
              >
                Update
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};
