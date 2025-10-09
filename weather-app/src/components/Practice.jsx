import React, {useState} from "react";


const Practice = () => {
    const [list,setList] = useState([])
    const [todoText,setTodoText] = useState('')
    const handleAdd = () => {
        setList([
            ...list,
            {
                id: Date.now(),
                text: todoText,
                completion: false
            }
        ])
        setTodoText('')
    }
    const handleDelete = (id) => {
        const updatedList = list.filter((item)=>item.id !== id)
        setList(updatedList);
    }

    const handleToggleCompletion = (id) =>{
        const updatedList = list.map((item)=>{
            if(item.id === id){
                return {
                    ...item,
                    completion: !item.completion
                }
            }
            return item
        });

        setList(updatedList);
    }
  return (

    <div>
      <p>list</p>
      <form onSubmit={(e)=>{
        e.preventDefault();
        handleAdd()
      }}>
        <input 
            type="text" 
            placeholder="Enter a todo item"
            value={todoText}
            onChange={(e)=>{setTodoText(e.target.value)}}
        />
        <button type="submit" >Add</button>
      </form>

    {list?.map((item)=>{
        return (
            <li key={item.id}>
                {item.text}
                <input 
                    type="checkbox"
                    checked={item.completion}
                    onChange={()=>handleToggleCompletion(item.id)}
                />
                <button onClick={()=>handleDelete(item.id)}> Delete </button>
            </li>
        )
    })}
    </div>
  )
}

export default Practice

// first think about ui how it will look

// then how initial data will come if it's api / props or you will store locally at state 

// after deciding where data will be stored then how data will be changed based on user interaction 



