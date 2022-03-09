import React, { useState } from 'react';
import CreateTodo from "./CreateTodo";
import PrintTodo from './PrintTodo';

export default function TodoList() {
    const [todoList, setTodoList] = useState([]);

    const deleteTodo = td => {
        alert(`${td.text}를 삭제했습니다.`);
        setTodoList(todoList.filter(todo => todo.id !== td.id));
        console.log(todoList);
    };

    return (
        <div id="todo-list-box">
            <CreateTodo todoList={todoList} setTodoList={setTodoList} />
            {todoList.map(todo => (
                <PrintTodo todo={todo} deleteTodo={deleteTodo} key={todo.id} />
            ))}
        </div>      
    )
}