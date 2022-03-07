import React, { useRef, useState, useEffect, useCallback } from 'react';

const todoList = ["eat rice", "play game"];

export default function TodoInsert() {
    const [inputTodo, updateText] = useState('');
    const handleSubmit = useCallback(() => {
        alert(inputTodo);
        todoList.push(inputTodo.toString());
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
        </>
    );
}