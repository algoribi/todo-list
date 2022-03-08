import React, { useState } from 'react';
import '../index.css';
import CreateTodo from "./CreateTodo";
import PrintTodo from './PrintTodo';

export default function TodoList() {
    const [todoList, setTodoList] = useState([]);

    const removeTodo = td => {
        alert(`${td.text}를 삭제했습니다.`);
        setTodoList(todoList.filter(todo => todo.id !== td.id));
    };

    const changeCheckBox = td => {
        if (td.check === false) {
            alert(`${td.text}를 완료했습니다.`);
            setTodoList(todoList.filter(todo => todo.id === td.id ? todo.check = true : todo));
        } else {
            setTodoList(todoList.filter(todo => todo.id === td.id ? todo.check = false : todo));

        }
    };

    return (
        <div>
            <CreateTodo todoList={todoList} setTodoList={setTodoList} />
            {todoList.map(todo => (
                <PrintTodo todo={todo} removeTodo={removeTodo} changeCheckBox={changeCheckBox} key={todo.id} />
            ))}
        </div>      
    )
}