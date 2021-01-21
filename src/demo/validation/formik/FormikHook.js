import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import * as yup from 'yup'

const validationSchema=yup.object().shape({
    class:yup.string().required('class is required'),
    students:yup.array().of(
        yup.object().shape({
            name:yup.string().required('name is requied')
        })
    )
})

function FormikHook() {
    const formik=useFormik({
        initialValues:{
            class:null,
            students:[
                {name:null}
            ]
        },
        validationSchema:validationSchema,
        onSubmit:()=>{
            alert('submitt')
        }
    })

    useEffect(()=>{
        console.log("Formik: ",formik )
        console.log("Formik: ",formik.isValid )
    },[formik])

    return (
        <div>
            <input id="class" name="class" type="text" value={formik.values.class} onChange={formik.handleChange}/>
            {formik.errors.class}
            {/* <input id="name" name="name" type="text" value={formik.values.name} onChange={formik.handleChange}/>
            {formik.errors.name} */}
            {/* <input id="name" name="name" type="text" value={formik.values.name} onChange={formik.handleChange}/>
            {formik.errors.name} */}
            
            <input onClick={
                formik.handleSubmit
            } type="button"/>
        </div>
    )
}

export default FormikHook

// Hello Tariq 
// Update: yesterday i was working on the ui fixes by ashita on instructor portal and today fix bugs of bugzilla on instructor portal 
// Thanks

