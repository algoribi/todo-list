import React, {useState} from 'react';
import '../index.css';

export default function CreateTodo({ todoList, setTodoList }) {
    const [todo, setTodo] = useState("");

    const createTodo = e => {
        alert(`'${todo}'를 todo에 추가했습니다.`);
        setTodoList(todoList.concat({
            id: todoList.length,
            text: todo,
            check: false
        }));
        setTodo("");
    }

    return (
        <div id="input-todoBox">
            <input
                type="text"
                id="input-todo"
                name="text"
                placeholder="Enter what you have to do."
                value={todo}
                onChange={(e) => {
                    setTodo(e.target.value);
                }}
            />
            <button onClick={createTodo} id="input-todo-button">
                Add
            </button>
        </div>
    )
}