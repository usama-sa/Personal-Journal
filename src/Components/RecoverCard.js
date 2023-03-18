import { CardMain, CardText, ForgotPasswordText, LabelText, MainContainer, SubSignHolder, SubSignText, Subholderdata } from "../styles/SignInCard"
import FullPasswordInput from "./FullPasswordInput"
import FullSimpleInput from "./FullSimpleInput"
import Button, { TextField } from "@mui/material"
import GeneralButton from "./GeneralButton"
import { ThemeColors } from './../constants/colors';
import { divStyles } from "../constants/Data/Data"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from "react"
import { ForgetPassword, GetHashedUser, UpdateUserPassword } from "../Apis/Apis"
import { useEffect } from "react"
import error from '../assets/images/404-pages.jpg'

const RecoverCard = () => {
    const navigate = useNavigate()
    const [email , setEmail] = useState()
    const [password, setPassword] = useState("")
    const [passwordF, setPasswordF] = useState("")
    const [isValid , setIsValid] = useState(null)
    const [allowed , setAllowed] = useState(false)
    
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    useEffect(()=>{
        CheckPasswords()
        GetHashedUser(path).then(e=>{
            console.log(e)
            if(e.length==0)
            {
                setIsValid(false)
            }
            else
            {
                setIsValid(true)
                setEmail(e[0].email_id)
            }

        })
    },[password,passwordF])
    function CheckPasswords(){

        if((password.length>0 && passwordF.length>0) && (password === passwordF) )
        {
            setAllowed(true)
            return
        }
        else{
            setAllowed(false)
            return
        }
    }

    return (
        <MainContainer>
           {isValid==null?null:isValid? 
           <CardMain>
                <CardText>
                   Let's recover your password
                </CardText>

                <Subholderdata>
                    <hr></hr>
                </Subholderdata>
                <LabelText>
                   Email
                </LabelText>
                <TextField
                type='text'
        helperText=""
        id="demo-helper-text-aligned"
         style={{marginTop:20}}
         disabled
         value={email}
      /> 
                <LabelText>
                   Type new password
                </LabelText>
                <TextField
                type='password'
        helperText=""
        id="demo-helper-text-aligned"
         style={{marginTop:20}}
         onChange={e=>{
             
             setPassword(e.target.value)
         }}
      /> 
        <LabelText>
                   Confirm new password
                </LabelText>
                <TextField
                type='password'
        helperText=""
        id="demo-helper-text-aligned"
         style={{marginTop:20}}
         onChange={e=>{
             
             setPasswordF(e.target.value)
         }}
      /> 

                {/* <Button/> */}
                <div style={{ marginTop: 20 }} onClick={()=>{

                    if(allowed)
                    {
                        UpdateUserPassword(email,password).then(e=>{
                            console.log(e)
                        })
                    }
                    else
                    {
                        return 0
                    }
                }}
                    >
                    <GeneralButton                    
                        style={{
                            padding: 10, backgroundColor: "#CDE4AC", marginTop: 20, justifyContent: "center", alignItems: "center", display: "flex", cursor: allowed?'pointer':'not-allowed', boxShadow: '1px 2px 9px black',
                        }} title="Send" /></div>
            </CardMain>:
            <CardMain>
                <img src={error}/>
            <CardText>
               Unauthorized Access.
            </CardText>
           
            {/* <Button/> */}
            <div style={{ marginTop: 20 }} onClick={()=>{
              
                    navigate("/")

                  
            }}
                >
                <GeneralButton                    
                    style={{
                        padding: 10, backgroundColor: "#CDE4AC", marginTop: 20, justifyContent: "center", alignItems: "center", display: "flex", cursor: 'pointer', boxShadow: '1px 2px 9px black',
                    }} title="Go to home" /></div>
        </CardMain>}
        </MainContainer>
    )
}

export default RecoverCard
