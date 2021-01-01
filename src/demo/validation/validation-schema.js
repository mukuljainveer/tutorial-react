import * as yup from 'yup';

let schema=yup.object().shape({
    email:yup.string().required('EMAIl Required'),
    password:yup.string().required()
})

export {schema}

let schema2=yup.object().shape({
    name:yup.string().required('Name Required'),
    email:yup.string().email().required('email is Required'),
    lastname:yup.string().required(),
    class:yup.object({
        startdate:yup.string().required('start date is required')
    }),
    subjects:yup.array().of(yup.object().shape({
        name:yup.string().required('subject name is required'),
        marks:yup.number().required('marks is required').positive('marks must be greater then zero')
    }))
})

export {schema2}