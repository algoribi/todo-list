import React, {useState} from 'react';

export default function CreateTodo({ todoList, setTodoList }) {
    const [todo, setTodo] = useState("");

    const createTodo = () => {
        const todoText = todo;

        if (todoText === "") {
            alert(`내용을 입력해주세요!`);
        } else {
            alert(`'${todoText}'를 todo에 추가했습니다.`);
            const newTodoList = [...todoList, {
                id: todoList.length,
                text: todoText,
                complete: false
            }];
            setTodoList(newTodoList);
            setTodo("");
        }
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
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        createTodo();
                    }
                }}
            />
            <button onClick={createTodo} id="input-todo-button">
                ➕
            </button>
        </div>
    )
}