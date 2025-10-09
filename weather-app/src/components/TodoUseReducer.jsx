import React,{useReducer, useState} from 'react';

function todoReducer(state,action) {
    switch(action.type) {
        case 'ADD':
            return 
        case 'DELETE':
            return 
        case 'TOGGLECOMPLETION':
    }
}

const TodoUseReducer = () => {

    const [list, dispatch] = useReducer(todoReducer,[]);
    const [todoInput, setTodoText] = useState('');

    const handleAdd = () => {
        dispatch({
            type: 'Add',
            id: Date.now(),
            text: todoInput,
            completion: falsec 
        })
    }

  return (
    <>
    <form onSubmit={()=>{

    }}>
        <input
        type='text'
        placeholder='Enter your text'
        value={todoInput}
        onChange={(e)=>setTodoText(e.target.value)} 
        />

        <button type='submit' > Add </button>
    </form>
    </>
  )
}

export default TodoUseReducer

