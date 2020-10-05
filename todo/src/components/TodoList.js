import React, { useState, useReducer } from 'react';

const initalState = [{
    id: Date.now(),
    task: 'Walk the dog.',
    completed: false,
}]

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUBMIT_FORM':
            return [
                ...state,
                action.payload,
            ]

        case 'TOGGLE_CHECKBOX':   
        return [
            ...state.map(item => item.id === action.payload ? {...item, completed: !item.completed} : item )
        ]

        default:
            return state;
    }
}


const TodoList = () => {

    const [state, dispatch] = useReducer(reducer, initalState);
    console.log(state)

    const [newTodoTask, setNewTodoTask] = useState(
        {
            id: '',
            task: '',
            completed: false,
        });



    /****HELPER FUNCTIONS*****/
    const handleChanges = (e) => {
        setNewTodoTask({ ...newTodoTask, [e.target.name]: e.target.value })
        console.log(newTodoTask)
    }

    const handleSubmit = event => {
        event.preventDefault()
        const newTaskObj = {
            ...newTodoTask,
            id: Date.now(),
        };
        dispatch({ type: 'SUBMIT_FORM', payload: newTaskObj })
    }

    const toggleCompleted = id => {
        state.map(item => {
            if (item.id === id) {
                const newTaskObj = {
                    ...item,
                    completed: !item.completed,
                }

                dispatch({ type: 'TOGGLE_CHECKBOX', payload: newTaskObj })
            }
        })
    }

    return (
        <div>
            <form onSubmit={event => handleSubmit(event)}>
                <input
                    name='task'
                    // value={newTodoTask.task}
                    placeholder='Enter ToDo task'
                    onChange={event => handleChanges(event)}
                />

                <button>Add</button>
            </form>

            <h3>Todo List (contains {state.length} item(s))</h3>
            {state.map(item => (
                <div key={item.id} className='todoItem'>
                    <input
                        name='checkbox'
                        type='checkbox'
                        // onChange={() => toggleCompleted(item.id)}
                        onChange={() => dispatch( {type: 'TOGGLE_CHECKBOX', payload: item.id})}
                    />
                    <p className={item.completed ? 'hiddenBtn' : 'Btn'}> {item.task} </p>
                </div>
            ))}
        </div>
    )
}

export default TodoList;