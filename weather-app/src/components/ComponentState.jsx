import React, {useEffect, useState} from 'react'


const ComponentState = ({data}) => {
    const [index,setIndex] = useState(0);
    const [show,setShow] = useState(true)
    //updating nested object 
    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
        });
    
    const [list,setList] = useState([
        { id: 0, title: 'Big Bellies', seen: false },
        { id: 1, title: 'Lunar Landscape', seen: false }, 
        { id: 2, title: 'Terracotta Army', seen: true },
        ]);

        const handleList = (e,id) => {
            console.log(e.target.checked)
            const updatedList = list.map(item=>(
                item.id === id ? {...item , seen : e.target.checked} : item
            ))
            setList(updatedList);
            console.log('updatedList',updatedList);
        }
    const handleNext = () => {
        if(index < data.length -1 )
            setIndex(index+1)
        else
            setIndex(0)
    }

    const handlePrev = () => {
        if (index > 0)
            setIndex(index-1)
        else
            setIndex(data.length - 1);
    }

    const handleVisiblity = () => {
        setShow(!show);
    }
    
    //we never change the original state we always create a copy and change value at that by using spread operator ...
    const handleCity = (e) => {
        setPerson({
            ...person,
            artwork : {
                ...person.artwork,
                city: e.target.value
            }
        })
    }

    const handleName = (e) => {
        setPerson({
            ...person,
            name : e.target.value
        })
    }
    useEffect(()=>{},[index,show])
  return (

    <div>   

    <h1>Art Bucket List</h1>
    <h2>My list of art to see:</h2>
    {list.map(data=>(
        <li key={data.id}>
            <label>{data.title}
                <input 
                    type='checkbox'
                    checked = {data.seen}
                    onChange={(e)=> handleList(e,data.id)}
                />
            </label>
        </li>
    ))}

        <button onClick={handlePrev}>Prev</button> {"  "}<button onClick={handleNext}>Next</button>
        <h1>{data[index]?.name}</h1>
        <p>{index +1 } out of {data.length}</p>-

        <button onClick={handleVisiblity}> {show ? 'show' : 'hide'} details</button>

        {show && <p>{data[index]?.description}</p>}
        
        <img
            src={data[index].url}
            alt={data[index].alt}

        />
        <label>name
            <input
                value={person.name}
                onChange={handleName}
            />
        </label>
        <label>
            city
            <input
                value={person.artwork.city}
                onChange={handleCity}
            />
        </label>

        <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
        
    </div>
  )
}

export default ComponentState
