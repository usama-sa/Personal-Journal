import { FooterHeading, FooterHolder, FooterText } from "../../styles/Footer"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";


const Footer = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('@storage_Key')
    if (user) {
      setUser(true)
    }
  }, [])

  return (
    <div>
      <FooterHolder>
        <FooterHeading>
          Personal Journal
        </FooterHeading>
        {user ?

          <FooterText onClick={()=>{
            navigate("/support")
          }}>
            Support
          </FooterText>
          :
          <>
            <FooterText onClick={() => navigate("./register")}>
              Free SignUp
            </FooterText>
            <FooterText onClick={() => navigate("/")}>
              Login
            </FooterText>
            <FooterText onClick={()=>{
            navigate("/support")
          }}>
            Support
          </FooterText>
          </>
        }
      </FooterHolder>
    </div>
  )
}

export default Footer
