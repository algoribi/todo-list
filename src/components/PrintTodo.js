import React from 'react';

export default function PrintTodo({ todo, completeToggle, deleteTodo }) {
    return ( 
        <div className="print-todo-item">
            <input type="checkbox" className="print-checkbox" name="print-checkbox" onChange={() => completeToggle(todo)}/>
            <span className={todo.complete ? "print-check-todo" : "print-uncheck-todo"}>{todo.text}</span>
            <button className="delete-todo-button" onClick={() => deleteTodo(todo)}>❌</button>
        </div>
    );
}