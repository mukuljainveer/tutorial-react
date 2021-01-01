import React from 'react'
import { useStepFormCtx } from '../context/step-form'

function Step2() {
    const ctx=useStepFormCtx()
    
    ctx.save=()=>{
        alert('Step2')
    }

    return (
        <div>
            Step2
        </div>
    )
}

export default Step2
