import styled from "styled-components";
import { ThemeColors } from "../constants/colors";
import { devices } from "../constants/Data/Data";

// Styled component named StyledButton
export const BookImg = styled.img`
 @media ${devices.laptopL} {
    width:600px;

   }

  @media ${devices.desktop} {
    width:600px;

     }
@media ${devices.tablet} {
    width:450px;

   
}
  @media ${devices.mobileL} {
    width:380px;

    
}
  @media ${devices.mobileM} {
    width:300px;

   
} @media ${devices.mobileS} { 
    width:220px; 
   
 }

 
`

export const TagImg = styled.img`
  @media ${devices.laptopL} {
    width:150px;
    height:150px; 


   }

  @media ${devices.desktop} {
 width:200px;
    height:200px; 
     }
@media ${devices.tablet} {
    width:160px;
    height:160px;
    
    margin-top:250px
   
}
  @media ${devices.mobileL} {
    width:140px;
    height:140px;
    
    margin-top:250px
    
}
  @media ${devices.mobileM} {
    width:120px;
    height:120px;
    
    margin-top:250px
   
} @media ${devices.mobileS} { 
    width:80px;
    height:80px;
    
    margin-top:50px
   
 }

`


export const JournalTitle = styled.div`
  @media ${devices.laptopL} {

    font-size:20px;
    display:flex;
    text-align:center
 


   }

  @media ${devices.desktop} {
    font-size:50px; 
    
    margin-bottom:10px 
     }
@media ${devices.tablet} {
    
    font-size:40px;  
    margin-bottom:10px 
   
}
  @media ${devices.mobileL} {
    
    font-size:40px;   
    
    margin-bottom:10px 
    
}
  @media ${devices.mobileM} {
    
    font-size:20px;   
   
} @media ${devices.mobileS} { 
    
    font-size:20px;  
 }

`



export const OptionImages = styled.img`
  @media ${devices.laptopL} {

    width:40px;
    height:40px
 


   }

  @media ${devices.desktop} {
    width:40px;
    height:40px     }
@media ${devices.tablet} {
    
    width:40px;
    height:40px   
}
  @media ${devices.mobileL} {
    
    width:30px;
    height:30px    
}
  @media ${devices.mobileM} {
    
    width:25px;
    height:25px   
} @media ${devices.mobileS} { 
    
    width:20px;
    height:20px }

`