import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const Formsumbit = () => {
    const [value, setvalue] = useState('');
    const dispatch = useDispatch();

    const handelSubmit = (event)=>{
        event.preventDefault();
        dispatch(addTodo({
            title: value,
        }))
    }

  return (
    <div className='max-w-[700px] m-auto'>
        <form onSubmit={handelSubmit}>
            <input type="text" placeholder='Add todo' className=' border w-full p-2 mb-3' value={value} onChange={(e)=>setvalue(e.target.value)}/>
            <button className='mb-8 px-4 py-2 bg-blue-500 text-white' >Submit</button>
        </form>
      
    </div>
  )
}

export default Formsumbit
