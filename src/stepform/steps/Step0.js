import React from 'react'
import { useStepFormCtx } from '../context/step-form'

function Step0() {
    const ctx=useStepFormCtx()
    
    ctx.save=async ()=>{
        // console.log('Request Complete @ Step 0')
        throw Error('Something Went Wrong')
    }

    return (
        <div>
            Step0
        </div>
    )
}

export default Step0
