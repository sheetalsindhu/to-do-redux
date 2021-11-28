import { useEffect } from "react";
import styles from "./todo.module.css";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, handleToggle, handleDelete, handleEdit }) => {
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className={styles.item}>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </>
  );
};
