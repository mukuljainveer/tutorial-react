import React, { useState } from 'react'
import * as yup from 'yup'


function LimitValidation() {
    const [formData,setFormData]=useState({});

    const ageValidate=yup.object().shape({
        ageStart:yup.number().required('Min Age is required').lessThan(yup.ref('ageEnd'),'should be less than age End'),
        ageEnd:yup.number().required('Max age is required')
    })

    const [formValidation, setFormValidation] = useState({});

    const submitValidate=()=>{
        ageValidate.validate(formData,{abortEarly:false}).then(res=>{
            console.log('Result: ',res)
            setFormValidation({})
        }).catch(er=>{
            let possibleErrors = {};

            er.inner.map((err) => {
              possibleErrors[err.path] = err.message;
            });
    
            setFormValidation({ ...possibleErrors });
        })
    }

    return (
        <div>  
            <input name='ageStart' onChange={(e)=>{
                formData[e.target.name] = e.target.value;
                setFormData({ ...formData });            
            }} type="number" placeholder="start age"/>
            {formValidation.ageStart}
            <br/>
            
            <input name="ageEnd" type="number" onChange={(e)=>{
                formData[e.target.name] = e.target.value;
                setFormData({ ...formData });            
            }} placeholder="end age"/>
            {formValidation.ageEnd}
            <br/>
            <input type="submit" onClick={submitValidate}/>
        </div>
    )
}

export default LimitValidation
