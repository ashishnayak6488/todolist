import React, { useState } from 'react'
import {addNewTodos} from '../redux/actions/index.js'
import { useDispatch } from 'react-redux'

const TodoForm = () => {

    const [input , setInput] = useState("")

    const dispatch = useDispatch();

    const onFormSubmit = (e) =>{

      e.preventDefault();
      dispatch(addNewTodos(input))
      setInput('')
    }

    const onInputChange = (e) =>{
        console.log(e.target.value)
        setInput(e.target.value)
    }


  return (
    <form className='form' onSubmit={onFormSubmit} >
        <input className='input' type="text" value={input} placeholder='Enter a todo' onChange={onInputChange} />
    </form>
  )
}

export default TodoForm