import React, { useEffect, useState } from 'react';

const todoList = [];

function TodoInsert() {
    const inputTodo = useState("");

    function handleSubmit() {
        alert('input : ' + inputTodo);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Hello, todo!</h1>
            <label>
                Todo : 
                <input type="text" value={inputTodo}/>
            </label>
            <input type="submit" value="Add" />
        </form>
    );
}

export default TodoInsert