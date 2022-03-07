import React, { useRef, useState, useEffect, useCallback } from 'react';

const todoList = [];

export default function TodoInsert() {
    const [inputTodo, updateText] = useState('');
    const List = [];
    const handleSubmit = useCallback(() => {
        alert(inputTodo);
        todoList.push(inputTodo);
        List = todoList.map((todo) =>
            <li key={todo.toString()}>
                {todo}
            </li>
        );
    });

    return (
        <>
            <h1>Hello, todo!</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Todo : 
                    <input type="text" onChange={e => updateText(e.target.value)} />
                </label>
                <button>Add</button>
            </form>
            <ul>{List}</ul>
        </>
    );
}