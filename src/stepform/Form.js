import React, { useState } from "react";
import StepForm, { useStepFormCtx } from "./context/step-form";
import Step0 from "./steps/Step0";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";

function Form() {
  const [step, setStep] = useState(0);

  const renderStep = (step) => {
    switch (step) {
      case 0:
        return <Step0 />;
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      default:
        setStep(0);
    }
  };

  const ctx = useStepFormCtx();

  const saveNextHandler = () => {
    let saveRequest = new Promise((resolve, reject) => {
      ctx.save().then(res=>{
        resolve("Request Complete")
      }).catch(er=>{
        reject("Request Cancelled: ",er);
      })
    });

    saveRequest
      .then((res) => {
        setStep(step + 1);
      })
      .catch((er) => {
          console.log('Error Occur :',er)
      });

    // setStep(step + 1);
  };

  return (
    <>
      {renderStep(step)}
      <button onClick={saveNextHandler}>Save & Next</button>
    </>
  );
}

export default Form;
