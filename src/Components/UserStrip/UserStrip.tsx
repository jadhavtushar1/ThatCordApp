import { Avatar, Box, Typography } from "@mui/material"
import './UserStrip.css'
import gitIcon from '../../Assets/github.svg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

interface user{
    user :String[] 
}
const UserStrip = ({user} :any )=>{
    const [visible ,setVisible] = useState(true)
    const handlevisibility = ()=>{
        setVisible(!visible)
    }
    return(
        <Box className="user-details-parent">
            <Box className="user-data">
                <Avatar className="user-image" src={gitIcon}/>
                <Typography className="user-name">{user.username}</Typography>
            </Box>
            <Box className="user-actions">
                <Box className="status-box user-icon"></Box>
                {visible ? <VisibilityIcon className="user-icon" onClick={()=>handlevisibility()} /> : <VisibilityOffIcon className="user-icon" onClick={()=>handlevisibility()}/> }
                <DeleteIcon className="user-icon"/>
            </Box>
        </Box>
    )
}
export default UserStrip