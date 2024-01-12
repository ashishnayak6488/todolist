import React, { useState } from 'react'
import { toggleTodo , updateTodo , deleteTodo } from '../redux/actions/index.js'
import { useDispatch } from 'react-redux'

const TodosUi = ({ todo }) => {

    const dispatch = useDispatch();

    const [editing, setEditing] = useState(false)
    const [text, setText] = useState(todo.data)

    const onFormSubmit = (e) =>{
        e.preventDefault();

        setEditing(prevState => !prevState)

        dispatch(updateTodo(todo._id , text))

    }

    return (
        <li
            className='task'
            onClick={() => dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration: todo.done ? 'line-through' : '',
                color: todo.done ? 'red' : 'rgb(34, 34, 73)'
            }}
        >

            <span style={{display: editing ? 'none' : ''}}>{todo.data}</span>

            <form
                style={{display: editing ? 'inline' : 'none'}}
                onSubmit={onFormSubmit}
            >
                <input type="text" value={text} className='text-todo' onChange={(e) => setText(e.target.value)} />

            </form>

            <span className='icons' onClick={() => setEditing(prevState => !prevState)}><i className="fa-solid fa-pen-to-square"></i></span>
            <span className='icons' onClick={() => dispatch(deleteTodo(todo._id))}><i className="fa-solid fa-trash"></i></span>
        </li>
    )
}

export default TodosUi