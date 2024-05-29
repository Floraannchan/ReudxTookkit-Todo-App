import React from 'react'
import Itemtodo from './Itemtodo.jsx'
import { useSelector } from 'react-redux'


const TodoList = () => {
  const list = useSelector((state)=>state.todos)
    
    // const list = [
    //     {id : 1, title : "todo1", completed : false},
    //     {id : 2, title : "todo2", completed : false},
    //     {id : 3, title : "todo3", completed : true},
    //     {id : 4, title : "todo4", completed : false},
    //     {id : 5, title : "todo5", completed : false},

    // ]
    
  return (
    <div>
        {list.map((item) =>(
             <Itemtodo id = {item.id} item={item.title} completed={item.completed} />
        ))}
      
    </div>
  )
}

export default TodoList
