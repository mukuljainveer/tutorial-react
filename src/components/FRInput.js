import React from 'react'

// function FRInput() {
//     return (
//         <div>
//             <input/>
//         </div>
//     )
// }

const FRInput=React.forwardRef((props,ref)=>{
    return (
        <div>
            <input ref={ref}/>
        </div>
    )
})

export default FRInput
