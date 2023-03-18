// import AuthenticationHeader from "../Components/AuthenticationHeader.js/AuthenticationHeader"
import Footer from "../../Components/Footer/Footer"
import GeneralButton from "../../Components/GeneralButton";
import { CardMain, CardText, LabelText, MainContainer, SubSignHolder, SubSignText, Subholderdata } from "../../styles/SignInCard"

import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom'
import { TextareaAutosize } from '@mui/base';
import { useState } from "react";
import { ContactSupport } from "../../Apis/Apis";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthenticationHeader from "../../Components/AuthenticationHeader.js/AuthenticationHeader";


const Support = () => {
    const [load, setLoad] = useState(false)
    const [support, setsupport] = useState({
        email: "",
        subject: "",
        body: ""
    })
    const navigate = useNavigate()

    return (
        <><div>
            <AuthenticationHeader search="false" loginto="Sign In" />
            <>
                <MainContainer>
                    <CardMain>
                        <CardText>
                            Talk To Support                    </CardText>

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
                            onChange={(e) => {
                                console.log(e.target.value)
                                support.email = e.target.value
                            }}

                        />            
                            <LabelText>
                                Subject
                            </LabelText>

                            <TextField
                                helperText=""

                                id="demo-helper-text-aligned"
                                style={{ marginTop: 20 }}
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    support.subject = e.target.value
                                }}

                            />                     <LabelText></LabelText>
                            Write Your Message
                        

                        <TextareaAutosize style={{ height: 200, marginTop: 30, padding: 10 }} onChange={(e) => { support.body = e.target.value }} />
                        {/* <Button/> */}

                        {load ? <div class="text-center">
                            <div class="spinner-border" role="status">
                            </div>
                        </div> :
                            <div style={{ marginTop: 20 }} onClick={() => {
                                if (support.email.length == 0 || support.body.length == 0 || support.subject.length == 0) {
                                    toast.error("All fields are required.")
                                }
                                else {
                                    setLoad(true)
                                    ContactSupport(support.email, support.subject, support.body).then(e => {
                                        console.log(e)
                                        if (e.status == false) {
                                            toast.error(e.message)
                                            setLoad(false)
                                        }
                                        else {
                                            toast.success(e.message)
                                            setLoad(false)
                                            setTimeout(() => {
                                                navigate("/")
                                            }, 1000)
                                        }
                                    })
                                }


                                console.log(support, "support")
                            }
                            }
                            >
                                <GeneralButton style={{
                                    padding: 10, backgroundColor: "#CDE4AC", marginTop: 20, justifyContent: "center", alignItems: "center", display: "flex", cursor: 'pointer', boxShadow: '1px 2px 9px black',
                                }} title="Send" /></div>}

                    </CardMain>
                </MainContainer></>   <Footer />
            <ToastContainer />
        </div>
        </>

    )
}

export default Support
