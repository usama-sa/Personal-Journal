import { CardMain, CardText, ForgotPasswordText, LabelText, MainContainer, SubSignHolder, SubSignText, Subholderdata } from "../styles/SignInCard"
import FullPasswordInput from "./FullPasswordInput"
import FullSimpleInput from "./FullSimpleInput"
import GeneralButton from "./GeneralButton"
import { Link, useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';  
import { useState } from "react"
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { RegisterUser } from "../Apis/Apis"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignupCard = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [pwd, setPwd] = useState("")
    const [pwdC, setPwdC] = useState("")
    const [email, setEmail] = useState("")
    const [load , setLoad] = useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    
    const handleRegister=()=>{
        if(email.length == 0 || pwd.length ==0 || fname.length ==0 || lname.length ==0 || pwdC.length === 0)
        {
            toast.error("All Fields are required.")
            setLoad(false)
        }
        else if(pwd !== pwdC)
        {
            toast.error("Passwords do not match.")
            setLoad(false)

        }
        else{
        RegisterUser(fname,lname,email,pwd).then(e=>{
            if(e.status === false)
            {
                toast.error(e.message)
                setLoad(false)
            }
            else{
               toast.success('User Created Successfully')
               setTimeout(() => {
                navigate("/")                                    
            }, 1000);
            }
        })
    }
    }
    return (
        <div>
            <MainContainer>
                <CardMain>
                    <CardText>
                        Sign Up
                    </CardText>
                    <Subholderdata>
                        <hr></hr>
                    </Subholderdata>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div style={{ marginRight: 10 }}>
                            <LabelText>
                                First Name
                            </LabelText>
                            <TextField
                                helperText=""
                                id="demo-helper-text-aligned"
                                style={{ marginTop: 20 }}
                                onChange={e => {
                                   setFname(e.target.value)
                                }}
                            />
                        </div>
                        <div style={{ marginLeft: 10 }}>
                            <LabelText>
                                Last Name
                            </LabelText>
                            <TextField
                                helperText=""
                                id="demo-helper-text-aligned"
                                style={{ marginTop: 20 }}
                                onChange={e => {
                                  setLname(e.target.value)
                                }}
                            />
                        </div>
                    </div>
                    <LabelText>
                        Email
                    </LabelText>
                    {/* <FullSimpleInput prop="email"/> */}
                    <TextField
                        helperText=""
                        id="demo-helper-text-aligned"
                        style={{ marginTop: 20 }}
                        onChange={e => {
                           setEmail(e.target.value)
                        }}
                    />

                    <LabelText>
                        Password
                    </LabelText>
                    <OutlinedInput
                        onChange={e => {
                           setPwd(e.target.value)
                        }}
                        style={{ marginTop: 20 }}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <LabelText>
                        Confirm Password
                    </LabelText>
                  
                    <OutlinedInput
                        onChange={e => {
                           setPwdC(e.target.value)
                        }}
                        style={{ marginTop: 20 }}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <SubSignHolder>
                        <SubSignText >
                            Already Registered ?     <p
                                onClick={() => navigate("/")}
                                style={{ textdecoration: "underline", color: "#358BB5", cursor: "pointer" }}>Login Here</p>

                        </SubSignText>
                    </SubSignHolder>
                    {/* <Button/> */}
                    {load ?<div class="text-center">
  <div class="spinner-border" role="status">
  </div>
</div>
:
                    <div style={{ marginTop: 20 }} onClick={() =>{
                        setLoad(true)
                        handleRegister()
                    }}>
                        <GeneralButton style={{
                            padding: 10, backgroundColor: "#CDE4AC", marginTop: 20, justifyContent: "center", alignItems: "center", display: "flex", cursor: 'pointer', boxShadow: '1px 2px 9px black',
                        }} title="Sign Up" /></div>}

                </CardMain>
            </MainContainer>
            <ToastContainer/>

        </div>
    )
}

export default SignupCard
