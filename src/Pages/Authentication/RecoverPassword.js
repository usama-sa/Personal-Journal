import { MainContainer } from '../../styles/SignIn'
import AuthenticationHeader from '../../Components/AuthenticationHeader.js/AuthenticationHeader'
import Footer from '../../Components/Footer/Footer'
import RecoverBody from '../../Components/RecoverBody'

const RecoverPassword = () => {
    return (
        <MainContainer>
            <AuthenticationHeader search="false" loginto="Sign Up" />
            <RecoverBody />
            <Footer />
        </MainContainer>
    )
}

export default RecoverPassword
