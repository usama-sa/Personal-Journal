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
const Card404 = () => {
    const navigate = useNavigate()

return(
    <MainContainer>
          <CardMain>
            <img src={error}/>
           
            {/* <Button/> */}
            <div style={{ marginTop: 20 }} onClick={()=>{
              
                    navigate("/")

                  
            }}
                >
                <GeneralButton                    
                    style={{
                        padding: 10, backgroundColor: "#CDE4AC", marginTop: 20, justifyContent: "center", alignItems: "center", display: "flex", cursor: 'pointer', boxShadow: '1px 2px 9px black',
                    }} title="Go to home" /></div>
        </CardMain>

    </MainContainer>
)
}

export default Card404

