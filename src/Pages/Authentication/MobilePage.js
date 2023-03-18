import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";

const MobilePage = () => {
    const [support, setsupport] = useState({
        email: "",
        message: ""
    })
    const handleChange = (event) => {
        setsupport({ ...support, [event.target.name]: event.target.value });
        console.log(support, "info")
    };
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()


    }
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height
      };
    }
   
    
      useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return (
        <div style={{backgroundColor:"red",justifyContent:"center",alignItems:"center",display:"flex" ,height:windowDimensions.height}}>
            <p style={{fontSize:30,color:"white",fontWeight:"700",textAlign:"center"}}>
            Mobile Version Not Avilable</p>
            </div>

    )
}

export default MobilePage
