import { CardMain, CardText, ForgotPasswordText, LabelText, MainContainer, SubSignHolder, SubSignText, Subholderdata } from "../styles/SignInCard"
import FullPasswordInput from "./FullPasswordInput"
import FullSimpleInput from "./FullSimpleInput"
import Button, { TextField } from "@mui/material"
import GeneralButton from "./GeneralButton"
import { ThemeColors } from './../constants/colors';
import { divStyles } from "../constants/Data/Data"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react"
import { ForgetPassword } from "../Apis/Apis"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Forgotpassword = () => {
    const navigate = useNavigate()
    const [email , setEmail] = useState( '')
    const [load , setLoad] = useState(false)

    return (
        <MainContainer>
            <CardMain>
                <CardText>
                    Forgot Password
                </CardText>

                <Subholderdata>
                    <hr></hr>
                </Subholderdata>
                <LabelText>
                    Enter Your Email
                </LabelText>
                <TextField
                type='email'
        helperText=""
        id="demo-helper-text-aligned"
         style={{marginTop:20}}
         onChange={e=>{
          setEmail(e.target.value)
         }}
      /> 

                {/* <Button/> */}
                {load ? <div style={{ marginTop: 20 }} class="text-center">
  <div class="spinner-border" role="status">
  </div>
</div>

                :<div style={{ marginTop: 20 }} onClick={()=>{
                     if(email.length == 0 )
                     {
                         toast.error("Email is required.")
                     }else{
                        setLoad(true)
                    ForgetPassword(email).then(e=>{
                       if(e.status== true)
                       {
                        toast.success('Email Sent Successfully')
                        setLoad(false)
                      

                       }
                       else{
                        toast.error(e.message)
                        setLoad(false)
                       }                     
                    })
                }}
            }
                    >
                    <GeneralButton                    
                        style={{
                            padding: 10, backgroundColor: "#CDE4AC", marginTop: 20, justifyContent: "center", alignItems: "center", display: "flex", cursor: 'pointer', boxShadow: '1px 2px 9px black',
                        }} title="Send" /></div>}
            </CardMain>
            <ToastContainer/>

        </MainContainer>
    )
}

export default Forgotpassword
