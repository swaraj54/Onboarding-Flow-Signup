import React,{useContext} from 'react';
import {Button,TextField, Typography, Grid} from '@mui/material';
import { MultiStepContext } from '../StepContext'; 

const SecondStep = () => {
    const {setStep,userData, setUserData } = useContext(MultiStepContext); 
  return (
    <div>
        <div >
        <Typography style={{fontSize:"23px", fontWeight:'bold', marginBottom:'2%' }} >Let's set up a home for all your work</Typography>
        <Typography style={{fontSize:"12px", color: 'grey', marginBottom:'8%' }}  >You can always create another workspace later.</Typography>
        <Typography style={{fontSize:"11px" , fontWeight:'bold', textAlign:'left', marginLeft:"15%", marginBottom:"5px" }} >Workspace Name</Typography>
        <TextField style={{width:"70%"  }}  InputLabelProps={{style: {fontSize: 11, marginTop:3} }} size="small"  label="Eden" value={userData['workspacename']} onChange={(e)=> setUserData({...userData , "workspacename": e.target.value})}  varient="outlined" color="secondary"></TextField>
        </div>
        <div>
        <Typography style={{fontSize:"11px" , fontWeight:'bold', textAlign:'left', marginLeft:"15%", marginBottom:"5px", marginTop:'20px' }} >Workspace URL</Typography><Typography style={{fontSize:"9px" , fontWeight:'light', textAlign:'left', marginLeft:"35%", marginBottom:"10px", marginTop:'-19px' }} >(Optional)</Typography>
        <Grid container direction="row">
            <Grid item>
            <TextField style={{width:"50%", marginLeft: "10%", background: '#f8f9fc'  }}  InputLabelProps={{style: {fontSize: 11, marginTop:3} }} size="small"  label="www.eden.com/" value={userData['workspaceurl']} onChange={(e)=> setUserData({...userData , "workspaceurl": e.target.value})}  varient="outlined" color="secondary"></TextField>
            </Grid>
            <Grid item>
            <TextField style={{width:"90%", marginLeft: "-51%"  }}  InputLabelProps={{style: {fontSize: 11, marginTop:3} }} size="small"  label="Example" value={userData['workspaceurlexample']} onChange={(e)=> setUserData({...userData , "workspaceurlexample": e.target.value})}  varient="outlined" color="secondary"></TextField>
            </Grid>
        </Grid>
        </div>
        <div>
        <Button style={{ height:"35px", width:"70%", marginTop:"20px", backgroundColor:'#664de5',fontSize: '11px',  textTransform: 'none' }} variant="contained" onClick={()=>{setStep(3)}} >Create Workspace</Button>
        </div>
    </div>
  )
}

export default SecondStep;