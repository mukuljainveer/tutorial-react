import React, { useEffect, useState } from 'react'

function Child(props) {
    const [data,setData]=useState('')
    useEffect(()=>{
        console.log('ALWAYS RENDERS CHILD')
    })

    useEffect(()=>{
        console.log('RENDER ONCE CHILD')
    },[])
    
    return (
        <div>
            {console.log('RETURN METHOD CHILD')}
            Child Component
            <button onClick={()=>{
                setData('Child TEXt')
            }}>Child Button</button>

            <button onClick={props.update}>Update Component</button>
            <div>Parent Update: {props.counter}</div>
        </div>
    )
}

// export default Child
export default React.memo(Child) 
