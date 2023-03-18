import { CardMain, CardText, ForgotPasswordText, LabelText, MainContainer, SubSignHolder, SubSignText, Subholderdata } from "../styles/SignInCard"
import FullPasswordInput from "./FullPasswordInput"
import FullSimpleInput from "./FullSimpleInput"
import Button from "@mui/material"
import GeneralButton from "./GeneralButton"
import { ThemeColors } from './../constants/colors';
import { divStyles } from "../constants/Data/Data"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react"
import { useContext } from "react"
import { Context } from "./ThemeContext"
import { useEffect } from "react"
import { LoginUser } from "../Apis/Apis"
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";

const SignInCard = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setValueC, valueC } = useContext(Context);
    const [load, setLoad] = useState(false)
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const[captcha,setcaptcha] = useState(false)
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [formFields, setformFields] = useState({
        email: "",
        password: ""
    })
    const handleChange = (event) => {
        setformFields({ ...formFields, [event.target.name]: event.target.value });
        console.log(formFields, "form-fields")
    };
    const handleSubmit = (e) => {
        e.preventDefault()


    }

    return (

        <form>

            <MainContainer>

                <CardMain>
                    <CardText>
                        Sign In
                    </CardText>

                    <Subholderdata>
                        <hr></hr>
                    </Subholderdata>
                    <LabelText>
                        Your Email
                    </LabelText>
                    <TextField
                        helperText=""
                        id="demo-helper-text-aligned"
                        style={{ marginTop: 20 }}
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                    />
                    <LabelText>
                        Your Password
                    </LabelText>
                    <OutlinedInput
                        onChange={e => {
                            setPassword(e.target.value)
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
                        <SubSignText>
                            New to Personal journal ?

                            <p
                                onClick={() => {
                                    localStorage.clear()
                                    navigate("./register")
                                }}
                                style={{ textdecoration: "underline", color: "#358BB5", cursor: "pointer" }}>Register Here</p>

                        </SubSignText>
                        <ForgotPasswordText onClick={() => navigate("./forgotpassword")}>

                            Forgot Password
                        </ForgotPasswordText>

                        <div style={{marginTop:30}}>
                        <ReCAPTCHA
    sitekey="6LcrjQclAAAAAKNhcHbKRD_v3BQrK5f6BQmFphhX"
    onChange={()=>{setcaptcha(!captcha)}}
    size = "normal"
   /></div>
                    </SubSignHolder>
                    {/* <Button/> */}
                    {load ? <div class="text-center">
                        <div class="spinner-border" role="status">
                        </div>
                    </div>
                        : <div style={{ marginTop: 20 }} onClick={() => {
                            if (email.length == 0 || password.length == 0) {
                                toast.error("email and password are required.")
                            }
                            else {
                                setLoad(true)
                                LoginUser(email, password).then(e => {
                                    console.log(e)
                                    if (e.status === false) {
                                        toast.error(e.message)
                                        setLoad(false)
                                    }
                                    else {

                                        localStorage.setItem("@storage_Key", e.token)
                                        localStorage.setItem("user", e.user)
                                        localStorage.setItem("tag", JSON.stringify("/static/media/tag1.1a6e1a3d86eb966ba6a1.png"))
                                        localStorage.setItem("bgcolor", "hsl(37, 83%, 54%)")
                                        navigate("/Journalcover")
                                        window.location.reload()
                                    }
                                })
                            }

                        }}>
                            {
                                captcha &&   <GeneralButton style={{
                                    padding: 10, backgroundColor: "#CDE4AC", marginTop: 20, justifyContent: "center", alignItems: "center", display: "flex", cursor: 'pointer', boxShadow: '1px 2px 9px black',
                                }} title="Sign In" />
                            }
                          
                        </div>}
                </CardMain>
            </MainContainer>
            <ToastContainer />

        </form>
    )
}

export default SignInCard
