import { MainContainer } from '../../styles/SignIn'
import AuthenticationHeader from '../../Components/AuthenticationHeader.js/AuthenticationHeader'
import Footer from '../../Components/Footer/Footer'
import Body404 from '../../Components/404Body'

const E404 = () => {
    return (
        <MainContainer>
            <AuthenticationHeader search="false" loginto="Sign Up" />
          <Body404/>
        </MainContainer>
    )
}

export default E404
