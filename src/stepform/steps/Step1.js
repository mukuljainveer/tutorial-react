import React from 'react'
import { useStepFormCtx } from '../context/step-form'

function Step1() {
    const ctx=useStepFormCtx()
    
    ctx.save=()=>{
        alert('Step1')
    }

    return (
        <div>
            Step1
        </div>
    )
}

export default Step1
