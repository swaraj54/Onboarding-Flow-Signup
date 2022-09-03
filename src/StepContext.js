import React,{useState} from 'react';
import './App.css';
import App from "./App";
 

const StepContext = () => {
    const [currentStep, setStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);

    function submitData (){
        setFinalData(finalData=>[...finalData,userData]);
        console.log("finalData",userData)
        setUserData("");
        setStep(1);
    }
  return (
    <div>
        <MultiStepContext.Provider value={{currentStep,setStep,userData,setUserData,finalData,setFinalData,submitData}}>
            <App />
        </MultiStepContext.Provider>
    </div>
  )
}

export const MultiStepContext = React.createContext();
export default StepContext;