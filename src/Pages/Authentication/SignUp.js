import AuthenticationHeader from "../../Components/AuthenticationHeader.js/AuthenticationHeader"
import Footer from "../../Components/Footer/Footer"
import SignUpBody from "../../Components/SignUpBody"
import { MainContainer } from "../../styles/SignIn"

const SignUp = () => {
  return (
    <MainContainer>
      <AuthenticationHeader search = "false" loginto = "Sign In"/>
      <SignUpBody/>
 
 <Footer/>
    </MainContainer>
  )
}

export default SignUp
