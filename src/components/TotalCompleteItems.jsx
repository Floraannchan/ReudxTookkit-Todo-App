import React from 'react'
import { useSelector } from 'react-redux';


const TotalCompleteItems = () => {
    const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
    )
    return <h4 className='mt-3 max-w-[700px] m-auto'>Total Complete Items: {completedTodos.length}</h4>;
}

export default TotalCompleteItems
