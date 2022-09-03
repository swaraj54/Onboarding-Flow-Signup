import React,{useContext} from 'react'
import {Button,TextField,Typography, Grid, ButtonGroup} from '@mui/material';
import { MultiStepContext } from '../StepContext';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';


const ThirdStep = () => {
    
    const {setStep,userData, setUserData } = useContext(MultiStepContext);
  return (
    <div>
        <Typography style={{fontSize:"23px", fontWeight:'bold', marginBottom:'2%' }} >How are you planning to use Eden?</Typography>
        <Typography style={{fontSize:"12px", color: 'grey', marginBottom:'8%' }}  >We'll streamline your setup experience accordingly.</Typography>
    
        <Button variant="outlined" style={{fontSize:"23px", fontWeight:'bold', marginBottom:'2%', height:'130px', width: '130px', marginRight:'20px', borderColor:'#664de5'
        }} value={userData['formyself']} onClick={(e)=> setUserData({...userData , "formyself": "selected for Myself"})} >
            <Grid direction="row" textAlign={'left'}>
                <div style ={{marginTop: "-10%" }}>
                <PersonIcon style={{ color: '#664de5',  }}/>
                </div>
                <Typography style={{fontSize:"11px", marginBottom:'3%', textTransform: 'none', fontWeight: 'bold', color:'black' }}>For myself</Typography> 
                <Typography style={{fontSize:"10px", marginBottom:'0%',textTransform: 'none', color:'grey' }}>Write better. Think more clearly. Stay organized</Typography>   
            </Grid>
            
        </Button> 
        <Button variant="outlined"  style={{fontSize:"23px", fontWeight:'bold', marginBottom:'2%', height:'130px', width: '130px', borderColor:'#EDF0F6'}}
         value={userData['forteam']} onClick={(e)=> setUserData({...userData , "forteam": "selected for Team"})}
        >
        <Grid direction="row" textAlign={'left'}>
                <div style ={{marginTop: "-10%" }}>
                <GroupsIcon style={{ color: '#664de5' }}/>
                </div>
                <Typography style={{fontSize:"11px", marginBottom:'3%', textTransform: 'none', fontWeight: 'bold', color:'black' }}>With my team</Typography> 
                <Typography style={{fontSize:"10px", marginBottom:'0%',textTransform: 'none', color:'grey' }}>  Wikis,docs,tasks & projects, all in one place.</Typography>   
            </Grid>

        </Button>

        <div>
        <Button style={{ height:"35px", width:"70%", marginTop:"20px", backgroundColor:'#664de5',fontSize: '11px',  textTransform: 'none' }} variant="contained" onClick={()=>{setStep(4)}} >Create Workspace</Button>
        </div>
    </div>
  )
}

export default ThirdStep