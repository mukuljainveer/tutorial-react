import React, { useEffect, useState } from 'react'
import Child from '../components/HookChilds/Child'

function Hooks() {
    const [data,setData]=useState(null)
    let [counter,setCounter]=useState(0)

    useEffect(()=>{
        console.log('ALWAYS RENDERS')
    })

    useEffect(()=>{
        console.log('RENDER ONCE')
    },[data])

    const update=()=>{
        setCounter(++counter)    
    }

    return (
        <div>
            {console.log('RETURN METHOD HOOk')}
            HELELO
            <button onClick={()=>{
                setData('NEW DATA')
                // props.click()
            }}>Hello</button>

            <Child update={update} counter={counter}/>
        </div>
    )
}

export default Hooks
