import React,{useContext} from 'react'
import {Button,TextField,Typography} from '@mui/material';
import { MultiStepContext } from '../StepContext'; 
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ThirdStep = () => {
    
    const {setStep,userData, setUserData, submitData } = useContext(MultiStepContext);
  return (
    <div>
    <div>   
      <div >
    <CheckCircleIcon sx={{ height:'60px', width:'60px', color :'#664de5', marginBottom:'5%' }} />
        </div> 
    <Typography style={{fontSize:"23px", fontWeight:'bold', marginBottom:'2%' }} >Congrulations, {userData.firstname}!</Typography>
    <Typography style={{fontSize:"12px", color: 'grey', marginBottom:'2%' }}  >You have complted onboarding, you can start using the Eden!</Typography>
    
    </div>
  
    <div>
        <Button style={{ height:"35px", width:"70%", marginTop:"10px", backgroundColor:'#664de5',fontSize: '11px',  textTransform: 'none', width:"90%" }} variant="contained" onClick={submitData}  >Launch Eden</Button>
        </div>
    </div>
  )
}

export default ThirdStep