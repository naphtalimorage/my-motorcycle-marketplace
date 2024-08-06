import MotorBikeInfo from "../motorbikeinfoform/page";
import PersonalInfo from "../personalinfoform/page";
import UpLoadImage from "../../uploadimage/page";
import { useState } from "react";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  

 
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  

 

 

  switch (step) {
    case 1:
      return (
        <MotorBikeInfo
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <UpLoadImage
        nextStep={nextStep}
        prevStep={prevStep}/>
       
      );
    
    case 3: 
    return (
      <PersonalInfo
      prevStep={prevStep}
    />
    );  

    default:
      return <div>Form Complited</div>;
  }
}
