import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {Dispatch, SetStateAction } from 'react';
import { Alert } from '@mui/material';
interface userToast{
    isOpen:boolean,

    message:String
}
export default function Toaster({isOpen,message}:userToast) {
    const [open,setOpen] = React.useState(isOpen)
    setTimeout(()=>{setOpen(false)},4000)
// useEffect(()=>{

// },[open])
 

  return (
    <div>
      <Snackbar
        open={isOpen}
        autoHideDuration={3000}
        message={message}
      >
        <Alert
    
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
        </Snackbar>
    </div>
  );
}