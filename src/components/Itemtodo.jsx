import React from 'react'
import { useDispatch} from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/todoSlice';


const Itemtodo = ({id, item, completed}) => {
  const dipatch = useDispatch();
  const handleComplete = ()=>{
    dipatch(toggleComplete({id: id, completed: !completed}))
  }
  const handleDelete = () => {
    dipatch(deleteTodo({id : id}))
  }
  return (
    <div className=' max-w-[700px] m-auto'>
      <li className={` list-none flex justify-between border-[1px] p-4 items-center ${completed? "bg-green-200" : ""}`}>
        <span className=' flex gap-2'>
            <input type="checkbox" checked ={completed} onChange={handleComplete}/> 
            {item}
        </span>
        <button className='px-4 py-2 bg-red-600' onClick={handleDelete}>Delete</button>
      </li>
    </div>
  )
}




export default Itemtodo
