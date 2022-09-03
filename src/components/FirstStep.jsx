import React,{useContext} from 'react';
import {Button,TextField, Typography} from '@mui/material';
import { MultiStepContext } from '../StepContext';

const FirstStep = () => {
    const {setStep, userData,  setUserData} = useContext(MultiStepContext);
  return (
    <>
    <div >
    <Typography style={{fontSize:"23px", fontWeight:'bold', marginBottom:'2%' }} >Welcome! First things first...</Typography>
    <Typography style={{fontSize:"12px", color: 'grey', marginBottom:'10%' }}  >You can always change them later.</Typography>
    <Typography style={{fontSize:"10px", fontWeight:'bold', textAlign:'left', marginLeft:"3%", marginBottom:"5px" }} >First Name</Typography>
    <TextField style={{width:"95%" }}  InputLabelProps={{style: {fontSize: 11, marginTop:3} }} size="small"  label="Steve Jobs" value={userData['firstname']} onChange={(e)=> setUserData({...userData , "firstname": e.target.value})}  varient="outlined" color="secondary"></TextField>
    </div>
    <div>
    <Typography style={{fontSize:"10px", fontWeight:'bold', textAlign:'left', marginBottom:"5px", marginTop:"12px",marginLeft:"-17%" }}  >Last Name</Typography>
    <TextField style={{ width:"135%",marginLeft:"-17%", marginBottom:"20px"  }} InputLabelProps={{style: {fontSize: 11, marginTop:3}}} size="small" label="Steve"  value={userData['lastname']} onChange={(e)=> setUserData({...userData , "lastname": e.target.value})}  varient="outlined" color="secondary"></TextField> 
    </div>
    <div>
    <Button style={{ height:"35px", width:"240%",marginLeft:"-67%", marginBottom:"20px", backgroundColor:'#664de5',fontSize: '11px',  textTransform: 'none' }} variant="contained" onClick={()=>{setStep(2)}} >Create Workspace</Button>
    </div>
    </>
  )
}

export default FirstStep