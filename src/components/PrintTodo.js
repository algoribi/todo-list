import React from 'react';

export default function PrintTodo({ todo, removeTodo, changeCheckBox }) {
    return (
        <div id="print-todoBox">
            {
                todo.checkBox === false
                    ? <div className='uncheck-todo'>
                        <input type="checkbox" className="check" name="check" onChange={() => changeCheckBox(todo)}/>
                        <label for="check">{todo.text}</label>
                        <button id="print-todo-button" onClick={() => removeTodo(todo.id)}>Delete</button>
                    </div>
                    : <div className='check-todo'>
                        <input type="checkbox" className="check" name="check" onChange={() => changeCheckBox(todo)}/>
                        <label for="check">{todo.text}</label>
                        <button id="print-todo-button" onClick={() => removeTodo(todo)}>Delete</button>
                    </div>
            }
        </div>
    );
}