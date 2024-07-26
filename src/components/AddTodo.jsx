import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'
const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const addTodoHandler = (e)=>{
        e.preventDefault()
        if(input===''){
            toast.error('Please Enter Todo')
        }
        else{
            dispatch(addTodo(input))
            toast.success("Todo Added successfully")
            setInput('')
        }

    }
  return (
    <div className='flex justify-center mt-24'>
    <form onSubmit={addTodoHandler}>
     <input
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
     type="text"
     placeholder='Enter a Todo...'
     value={input}
     onChange={(e)=> setInput(e.target.value)}
     
     />
     <button 
    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
     type='submit'
     >Add Todo</button>

    </form>
    </div>
  )
}

export default AddTodo