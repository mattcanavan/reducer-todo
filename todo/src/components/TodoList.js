import React, { useState, useReducer } from 'react';


const TodoList = () => {
    const [fullTodoList, setFullTodoList] = useState([
        {
            id: Date.now(),
            task: 'Walk the dog.',
        }
    ]);
    const [newTodoTask, setNewTodoTask] = useState({ id: '', task: '' });

    const handleChanges = (e) => {
        setNewTodoTask({ ...newTodoTask, [e.target.name]: e.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        const newTaskObj = {
            ...newTodoTask,
            id: Date.now(),
        };
        setFullTodoList([...fullTodoList, newTaskObj])
    }

    return (
        <div>
            <form onSubmit={(event) =>  handleSubmit(event) }>
                <input
                    name='task'
                    value={''}
                    placeholder='Enter ToDo task'
                    onChange={event => handleChanges(event)}
                />

                <button>
                    Add
                </button>
            </form>

            <h3>Full Todo List:</h3>
            {fullTodoList.map(item => (
                <p key={item.id}>{item.task}</p>
            ))}
        </div>
    )
}

export default TodoList;