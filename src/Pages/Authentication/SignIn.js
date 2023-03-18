import { MainContainer } from '../../styles/SignIn'
import AuthenticationHeader from '../../Components/AuthenticationHeader.js/AuthenticationHeader'
import SignInBody from '../../Components/SignInBody'
import Footer from '../../Components/Footer/Footer'

const SignIn = () => {
    return (
        <MainContainer>
            <AuthenticationHeader search="false" loginto="Sign Up" />
            <SignInBody />
            <Footer />
        </MainContainer>
    )
}

export default SignIn
