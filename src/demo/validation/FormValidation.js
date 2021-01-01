import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { schema2 } from "./validation-schema";

function FormValidation() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    class: {
      startdate: "",
    },
    subjects: [
      {
        name: "",
        marks: 0,
      },
      {
        name: "",
        marks: 0,
      },
    ],
  });

  const [formValidation, setFormValidation] = useState({});

  const submitHandler = () => {
    schema2
      .validate(formData, { abortEarly: false })
      .then((res) => {
        setFormValidation({});
        console.log("FormData: ", formData);
      })
      .catch((er) => {
        let possibleErrors = {};

        er.inner.map((err) => {
          possibleErrors[err.path] = err.message;
        });

        setFormValidation({ ...possibleErrors });
        console.log("Error: ", JSON.stringify(possibleErrors));
        console.log("Error: ", JSON.stringify(er.inner));
      });
  };

  useEffect(() => {
    console.log("formValidation:", formValidation);
  }, [formValidation]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="name"
      />
      {formValidation.name}
      <br />
      <input
        type="text"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="email"
      />
      {formValidation.email}
      <br />
      <input
        type="text"
        onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
        placeholder="lastname"
      />
      {formValidation.lastname}
      <br />
      <input
        type="text"
        onChange={(e) =>
          setFormData({ ...formData, class: { startdate: e.target.value } })
        }
        placeholder="startdate"
      />
      {formValidation["class.startdate"]}
      <br />
      Subjects:
      <br />
      {formData.subjects.map((subject, index) => {
        return (
          <>
            <input type="text" placeholder="subject" onChange={(e)=>{
              formData.subjects[index].name=e.target.value;
              setFormData({...formData})
            }}/>
            {formValidation[`subjects[${index}].name`]}
            <input type="text" placeholder="marks" onChange={(e)=>{
              formData.subjects[index].marks=e.target.value;
              setFormData({...formData})
            }}/>
            {formValidation[`subjects[${index}].marks`]}
            <br/>
          </>
        );
      })}
      <input type="submit" onClick={submitHandler} />
    </div>
  );
}

export default FormValidation;
