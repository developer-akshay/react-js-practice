1 
{list.map(data=>{
    <li key={data.id}>
        <label>{data.title}
            <input 
                type='checkbox'
                checked = {data.seen}
                onChange={(e)=>{

                }}
            />
        </label>
    </li>
})}


// Inside map, you are using curly braces {} after the arrow function, but you never return anything.
// In JavaScript:

// () => { <li>...</li> } → means you opened a block {}, but you didn’t return anything → result = undefined.

// () => ( <li>...</li> ) → using parentheses returns the JSX directly.

// That’s why nothing is rendering.