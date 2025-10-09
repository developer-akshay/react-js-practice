import React, {useState,useEffect} from 'react'

const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const [todoInput,setTodoInput] = useState('');

    const handleAdd = () => {

        if(todoInput !=='') {
            setTodoList([
                ...todoList,
                {
                    id: Date.now(),
                    text: todoInput,
                    completion: false
                }
            ]);

            setTodoInput('');

        }
        return
    }

    const toggleCompletion = (id) => {
        const updatedList = todoList.map((item)=>{
            if(item.id === id) {
                return {
                    ...item,
                    completion: !item.completion  
                }
            }
            return item
        })
        setTodoList(updatedList);
    }

    const handleDelete = (id) => {
        const updatedList = todoList.filter((item)=> item.id!==id)
        setTodoList(updatedList);

    }
    return(
        <>
        <div>
            <h1>Todo List</h1>
            {todoList?.map((item,index)=>(
                <li key={item.id}>
                    {item.text}
                    <input 
                        type='checkbox' 
                        checked={!!item.completion}
                        onChange={()=>toggleCompletion(item.id)}
                    />
                    <button onClick={()=>handleDelete(item.id)}>delete</button>
                </li>
            ))}

        </div>
        <form onSubmit={(e)=>{
            e.preventDefault();
            handleAdd()
        }}>
            <input 
                    type='text' 
                    placeholder='input text to add' 
                    value={todoInput} 
                    onChange={(e)=> setTodoInput(e.target.value)}
                />
            <button type='submit' >Add</button>
        </form>
            
        </>
    )
}

export default Todo
