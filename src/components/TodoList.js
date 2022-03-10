import React, { useState } from 'react';
import CreateTodo from "./CreateTodo";
import PrintTodo from './PrintTodo';

export default function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const list = todoList;

    const deleteTodo = todo => {
        alert(`${todo.text}를 삭제했습니다.`);
        const newTodoList = [];
        list.forEach(function(item) {
            if (item.id !== todo.id) {
                newTodoList.push(item);
            }
        });
        setTodoList(newTodoList);
    };

    const completeToggle = todo => {
        const newTodoList = todoList.map(item => {
            if (item.id === todo.id) {
                return {
                    id : item.id,
                    text : item.text,
                    complete : !item.complete
                };
            }
            return item;
        });

        if (!todo.complete) {
            alert(`${todo.text}를 완료했습니다.`);
            setTodoList(newTodoList);
        } else {
            setTodoList(newTodoList);
        }
    }

    return (
        <div id="todo-list-box">
            <CreateTodo todoList={list} setTodoList={setTodoList} />
            {list.map(todo => (
                <PrintTodo todo={todo} completeToggle={completeToggle} deleteTodo={deleteTodo} key={todo.id} />
            ))}
        </div>
    )
}