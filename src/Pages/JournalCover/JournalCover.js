import React, { useContext } from "react"
import AuthenticationHeader from "../../Components/AuthenticationHeader.js/AuthenticationHeader"
import Footer from "../../Components/Footer/Footer"
import JournalBody from "../../Components/JournalBody"
import SubHeader from "../../Components/SubHeader"
import { MainContainer } from "../../styles/SignIn"
import { UserContext } from "../../App"
import ThemeContext from "../../Components/ThemeContext"

const JournalCover = () => {
    const { theme } = useContext(ThemeContext)
    const bgcolor = theme.colors.background
    var a = localStorage.getItem("bgcolor")
    return (
        <MainContainer>
            <AuthenticationHeader search="false" />
            <SubHeader />
            <JournalBody style={{
                backgroundColor: a, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
            }} />
            <Footer />
        </MainContainer>
    )
}

export default JournalCover
