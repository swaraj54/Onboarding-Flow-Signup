import './App.css';
import FirstStep  from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import {Step, Stepper, StepLabel } from "@mui/material";
import {MultiStepContext} from './StepContext';
import { useContext } from 'react';
import FourthStep from './components/FourthStep';
import pic from './Eden.png';

const App = () => {
  const {currentStep , finalData,setStep} = useContext(MultiStepContext);

  function showStep(step){
    switch(step){
      case 1 : 
      return <FirstStep />
      case 2 : 
      return <SecondStep/>
      case 3 :
      return <ThirdStep />
      case 4 :
      return <FourthStep />
    }
  }
  return (
    <div className="App">
      <header className='App-header'>
      <img
        style={{width:'8%', marginBottom:'3%' }}
        src={pic}
        alt="logo of Eden"
      />
      <div className='center-stepper' style={{ width:'60%', marginLeft:'37%' }} >
      <Stepper spacing={4} style={{ width:'38%' }}  activeStep = {currentStep - 1 } orientation='horizontal' >
        <Step 
         sx={{
          '& .MuiStepLabel-root .Mui-completed': {
            color: '#664de5', // circle color (COMPLETED)
          },
          '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
            {
              color: 'white', // Just text label (COMPLETED)
            },
          '& .MuiStepLabel-root .Mui-active': {
            color: '#664de5', // circle color (ACTIVE)
          },
          '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
            {
              color: 'common.white', // Just text label (ACTIVE)
            },
          '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
            fill: 'white', // circle's number (ACTIVE)
          },'& .MuiStepConnector-line .MuiStepConnector-lineHorizontal .css-z7uhs0-MuiStepConnector-line': {
            color: '#664de5', // circle color (COMPLETED)
          },
        }}
        >
          <StepLabel ></StepLabel>
        </Step>
        <Step
         sx={{
          '& .MuiStepLabel-root .Mui-completed': {
            color: '#664de5', // circle color (COMPLETED)
          },
          '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
            {
              color: 'common.white', // Just text label (COMPLETED)
            },
          '& .MuiStepLabel-root .Mui-active': {
            color: '#664de5', // circle color (ACTIVE)
          },
          '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
            {
              color: 'common.white', // Just text label (ACTIVE)
            },
          '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
            fill: 'white', // circle's number (ACTIVE)
          },
        }}
        >
          <StepLabel></StepLabel>
        </Step>
        <Step
         sx={{
          '& .MuiStepLabel-root .Mui-completed': {
            color: '#664de5', // circle color (COMPLETED)
          },
          '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
            {
              color: 'common.white', // Just text label (COMPLETED)
            },
          '& .MuiStepLabel-root .Mui-active': {
            color: '#664de5', // circle color (ACTIVE)
          },
          '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
            {
              color: 'common.white', // Just text label (ACTIVE)
            },
          '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
            fill: 'white', // circle's number (ACTIVE)
          },
        }}
        >
          <StepLabel></StepLabel>
        </Step>
        <Step
         sx={{
          '& .MuiStepLabel-root .Mui-completed': {
            color: '#664de5', // circle color (COMPLETED)
          },
          '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
            {
              color: 'common.white', // Just text label (COMPLETED)
            },
          '& .MuiStepLabel-root .Mui-active': {
            color: '#664de5', // circle color (ACTIVE)
          },
          '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
            {
              color: 'white', // Just text label (ACTIVE)
            },
          '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
            fill: 'common.white', // circle's number (ACTIVE)
          },
        }}
        >
          <StepLabel></StepLabel>
        </Step>
      </Stepper>
      </div>
      {showStep(currentStep)}
      </header>
    </div>
  );
}

export default App;
