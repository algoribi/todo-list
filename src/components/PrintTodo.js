import React, { useState } from 'react';

export default function PrintTodo({ todo, deleteTodo }) {
    const [checkState, setCheckState] = useState(false);

    const changeCheckBox = td => {
        if (!checkState) {
            alert(`${td.text}를 완료했습니다.`);
        }
        
        setCheckState(!checkState);
    };

    return (
        <div id="print-todoBox">
            <input type="checkbox" className="print-checkbox" name="print-checkbox" onChange={() => changeCheckBox(todo)}/>
            <span className={checkState ? "print-check-todo" : "print-uncheck-todo"}>{todo.text}</span>
            <button className="delete-todo-button" onClick={() => deleteTodo(todo)}>Delete</button>
        </div>
    );
}