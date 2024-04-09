
import * as React from 'react';

// Import SetStateAction from React
import {Dispatch, SetStateAction } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import CallEndIcon from '@mui/icons-material/CallEnd';
import './VideoContainer.css'
import { Avatar, Box, Input, Typography } from '@mui/material';
import gitIcon from '../../Assets/github.svg'
import ChatIcon from '@mui/icons-material/Chat';


interface VideoContainerProps {
    isopen: boolean; // Prop indicating whether the camera is open or not
    isAudioCall:boolean;
    setCameraOpen: Dispatch<SetStateAction<boolean>>; // Function to update the state of the camera
    setAudioCAll:Dispatch<SetStateAction<boolean>>;
  }
export default function VideoContainer({ isopen, setCameraOpen,isAudioCall,setAudioCAll }: VideoContainerProps) {
  
  const [camOpen,setCamOpen] = React.useState(isopen)
  const [mic,setmicOpen] = React.useState(false)
  const [chatOpen,setChatOpen] = React.useState(false)
  const handleChat = ()=>{
    setChatOpen(!chatOpen)
  }
  const handlemic=()=>{
    setmicOpen(!mic)
  }
  const handlecamOpen =()=>{
    setCamOpen(!camOpen)
  }


  const handleClose = () => {
    setCameraOpen(false);
  };

  return (
    <React.Fragment>
      
      <Dialog
        open={isopen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
        {!isAudioCall ? 
         (<DialogContent className='video-container'>
            <Box><Box className="user-video-box"> </Box>
          <Box className="user-video-box mt-4"> </Box></Box>
          {chatOpen &&
          <Box className="call-chaat-box">
          <Box className="msg-box"
                  component="form"
                  sx={{
                      '& > :not(style)': { m: 1 },
                      position:'absolute',
                      bottom:'70px',
                      paddingLeft:'10px'
                  }}
                  noValidate
                  autoComplete="off"
                  >
   
              <Input className="message-field"  />
              <Button sx={{backgroundColor:'#4f3285'}} variant="contained">Send</Button>

  
  </Box></Box>}
          
        </DialogContent>) :
        (
            <DialogContent className='video-container'>
          <Box className="user-video-box audio-container"> 
          <Avatar src={gitIcon}/>
          <Typography className='mt-4'>Tushar Jadhav</Typography>
          </Box>
          {chatOpen &&
          <Box className="call-chaat-box">
            <Box className="msg-box"
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                        position:'absolute',
                        bottom:'70px',
                        paddingLeft:'10px'
                    }}
                    noValidate
                    autoComplete="off"
                    >
     
                <Input className="message-field"  />
                <Button sx={{backgroundColor:'#4f3285'}} variant="contained">Send</Button>

    
    </Box></Box>}
        </DialogContent>
        )  }
        
        <DialogActions className="bottom-actions m-0">
            {camOpen && !isAudioCall ? <VideocamIcon onClick={()=>handlecamOpen()} /> : !isAudioCall ?<VideocamOffIcon onClick={()=>handlecamOpen()}/> : ''}      
        {mic ? <MicIcon onClick={()=>handlemic()} />:<MicOffIcon onClick={()=>handlemic()} />}
        <ChatIcon onClick={()=>handleChat()}/>
        <CallEndIcon onClick={()=>handleClose()}/>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}