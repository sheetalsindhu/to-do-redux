import styles from "./todo.module.css";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export const TodoItem = ({ todo, handleToggle, handleDelete, handleEdit }) => {
  return (
    <div className={styles.todoItem}>
      <p
        className={todo.status ? styles.done : styles.notDone}
        onClick={() => {
          handleToggle(todo.id);
        }}
      >
        {todo.title}
      </p>

      <div className={styles.btns}>
        <div
          className={styles.container}
          class="form-check"
          onClick={() => handleToggle(todo.id)}
        >
          <input
            className={styles.checked}
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked={todo.status}
          />
        </div>

        <div className={styles.delete} onClick={() => handleEdit(todo)}>
          <FaEdit />
        </div>

        <div className={styles.delete} onClick={() => handleDelete(todo.id)}>
          <MdDelete />
        </div>
      </div>
    </div>
  );
};
