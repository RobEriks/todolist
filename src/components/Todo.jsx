export default function Todo({ todo, toggleDone, deleteTodo }) {
    return (
      <li className={`todo-objekt ${todo.done ? "done" : ""}`}>
        <span onClick={() => toggleDone(todo.id)}>
          {todo.title}
        </span>
        <div className="todo-buttons">
          <button className="done-btn" onClick={() => toggleDone(todo.id)}>
            {todo.done ? "✅" : "❎"}
          </button>
          <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
            🗑️
          </button>
        </div>
      </li>
    );
  }
  