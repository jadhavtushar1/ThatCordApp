import './LoginPage.css'
import gitIcon from '../../Assets/github.svg'
import linkedIcon from '../../Assets/linkedin.svg'
import resume from '../../Assets/file-person.svg'
import Toaster from '../../Components/Toaster/Toaster'
import { HtmlHTMLAttributes, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'



const LoginPage = ()=>{
    // const error = useAppSelector((state:any )=>state.authData.error)

    // const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [loginOpen,setLoginOpen] =useState(true)
    const [userName , setUserName] = useState('')
    const [email , setmail] = useState('')
    const [message ,setMessage] = useState('')
    const [password , setPassword] = useState('')
    const [isSignedin,setSignedin] = useState(false)
    const [isError,setError] = useState(false)
    const [invalidUser,setValidUser] = useState(false)

    const handleSigninClick = async()=>{
        if(email && password ){
            const register_user = await fetch('http://localhost:4000/api/user',{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify({
                    email,
                    password
                })
            })
            const user = await register_user.json()
            if(user.user===true){
                navigate('/thatCord')
                setSignedin(true)
                setMessage("User Logged in Successfully !!")
                
            }
            else{
                setValidUser(true)
            }
        }
    }
    useEffect(()=>{
        // if(error===0) {
        //     setError(false)
        //     navigate('/HomePage')
            
        // }
        // else{
            setError(true)
            
        // }
    },[])
    

    
    const handleUname = (event: any)=>{
         const value = (event.target as HTMLInputElement).value
         setUserName(value)
    }
    const handlePassword = (event: any)=>{
        const value = (event.target as HTMLInputElement).value
        setPassword(value)
    }
    const handlemail = (event: any)=>{
        const value = (event.target as HTMLInputElement).value
        setmail(value)
    }

    const handleCreateNowClick = ()=>{
        setLoginOpen(false)
        setUserName('')
        setPassword('')
    }

    const handlealreadyclick = ()=>{
        setLoginOpen(true)
    }
    const handleCreateUser= async()=>{
        
        if(userName && password && email){
            const register_user = await fetch('http://localhost:4000/api/register',{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify({
                    userName,
                    email,
                    password
                })
            })
            if(register_user.status===200){
                setSignedin(true)
                setMessage("User Created Successfully !!")
            }
           
        }
        
    }

    return (
        <div className="login-parent">
            <div className='login-box-parent'>
                <div className='text-box'>
                <h1 className='icon-text'>THATCORD.</h1>
                </div>
                {loginOpen ? (
                <div className='login-details-box m-4'>
                     <div className="input-group mb-3">
                        <input onChange={(e)=>handlemail(e)} value={email} type="text" className="form-control text-field-css" placeholder="Username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    </div>
                    <div className="input-group mb-3">
                        <input onChange={(e)=>handlePassword(e)} value={password} type="password" className="form-control text-field-css" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    </div>
                    <button type="button" className="btn btn-success w-100 sign-btn" onClick={()=>handleSigninClick()}>Sign in</button>
                    {invalidUser && 
                    <>
                    <div className='dummy-details incorrect-box mt-3 mb-3'>{"Invalid User Details"}</div>
               
                    
                    <div className='dummy-details'>{"{uname : 'test@123' pass : 'test'}"}</div></>}
                    <button type="button" className="btn btn-info w-100 mt-3 create-btn" onClick={()=>handleCreateNowClick()}>Create Account</button>
                </div>
                ):(
                    <div className='login-details-box m-4'>
                        <div className="input-group mb-3">
                                <input onChange={(e)=>handleUname(e)} type="text" className="form-control text-field-css" placeholder="Username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        </div>
                        <div className="input-group mb-3">
                                <input onChange={(e)=>handlemail(e)} type="text" className="form-control text-field-css" placeholder="E-mail" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        </div>
                        <div className="input-group mb-3">
                                <input onChange={(e)=>handlePassword(e)} type="password" className="form-control text-field-css" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        </div>
                        
                        {/* <div className="mb-3">
                            <input className="form-control text-field-css" type="file" id="formFile"/>
                        </div> */}
                        <button onClick={()=>handleCreateUser()} type="button" className="btn btn-success w-100 sign-btn">Sign up</button>
                        <h5 className='mt-3 help-text'>Need Help ?</h5>
                        <button type="button" className="btn btn-info w-100 mt-3 create-btn" onClick={handlealreadyclick}>Already have an account ?</button>
                        
                        
                    </div>
                )}
                <div className='media-links d-flex justify-content-center mb-3 '>
                    <img src={gitIcon} alt=''/>
                    <img src={linkedIcon} alt=''/>
                    <img src={resume} alt=''/>
                </div>
            </div>
            {isSignedin && <Toaster isOpen = {isSignedin}  message={message}/>}
        </div>
    )
}

export default LoginPage