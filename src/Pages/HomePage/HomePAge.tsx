import { Box, Button, Typography } from "@mui/material"
import Header from "../../Components/Header/Header"
import UserStrip from "../../Components/UserStrip/UserStrip"
import './HomePage.css'
import Input from '@mui/material/Input';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CallIcon from '@mui/icons-material/Call';
import VideoContainer from "../../Components/VideoComponent/VideoContainer";
import { useEffect, useState } from "react";

const HomePage = ()=>{
    const [isopen , setopen]  = useState(false)
    const [isAudioCall,setAudioCAll] = useState(false)
    const [users,setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/users', {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
                const data = await response.json();
                setUsers(data.data); 
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
    
        fetchUsers(); 
    }, []);
    


    const handlecameraClick = ()=>{
        setAudioCAll(false)
        setopen(!isopen)
    }
    const handleAudioCall= async()=>{
        await setAudioCAll(true)
        setopen(!isopen)
    }
    return (
        <>
        <Header/>
        <Box className="homepage-content-parent">
          
            <Box className="users">{users && users.map((user, index) => (
    <UserStrip key={index} user={user} />
))}</Box>
            <Box className="chat-box">
                <Box className="call-options">
                    <Box  onClick = {()=>handlecameraClick()} className="call-option-1">
                        <VideoCallIcon className="call-icon"/>
                    </Box>
                    <Box onClick={()=>handleAudioCall()} className="call-option-2">
                        <CallIcon className="call-icon" />
                    </Box>

                </Box>
                <Box className="message-text-box">

                    <Box className="msg sent-message">
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae dicta vitae sunt ullam voluptatum laudantium mollitia cumque provident maiores perferendis amet eligendi, molestiae odio tempore.<Typography className="fw-bold mt-2 fst-italic">09:30 PM Saturday</Typography></Typography>
                        
                    </Box>
                    <Box className="msg received-msg">
                        <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam aliquam sunt asperiores, adipisci provident sequi nobis debitis doloribus eaque pariatur.<Typography className="mt-2 fw-bold fst-italic">09:30 PM Saturday</Typography></Typography>
                        
                    </Box>

                </Box>
                
                <Box className="msg-box"
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                        position:'absolute',
                        bottom:'0px'
                    }}
                    noValidate
                    autoComplete="off"
                    >
     
                <Input className="message-field"  />
                <Button sx={{backgroundColor:'#4f3285'}} variant="contained">Send</Button>

    
    </Box>

                
            </Box>
        </Box>
        {isopen && 
        <VideoContainer isopen={isopen} isAudioCall={isAudioCall} setAudioCAll={setAudioCAll} setCameraOpen={setopen}/>}
        </>
    )
}

export default HomePage