import styled from "styled-components";
import { ThemeColors } from "../constants/colors";
import { devices } from "../constants/Data/Data";

// Styled component named StyledButton
export const MainContainer = styled.div`
 display: flex;
 flex: 1;  
 justify-content:center;
 align-items:center;
 align-self:center;
 margin-top:50px;
 margin-bottom:50px;
`;

export const CardMain = styled.div`

 
@media ${devices.laptop} {
  padding:20px 50px;
background-color:${ThemeColors.white};
display:flex;
flex-direction:column; 
width:300px
}


  @media ${devices.laptopL} {
    padding:20px 50px;
background-color:${ThemeColors.white};
display:flex;
flex-direction:column; 
width:300px }
  @media ${devices.desktop} {
    padding:20px 50px;
background-color:${ThemeColors.white};
display:flex;
flex-direction:column; 
width:600px  }
@media ${devices.tablet} {
  padding:20px 50px;
background-color:${ThemeColors.white};
display:flex;
flex-direction:column; 

width:400px  
}
  @media ${devices.mobileL} {
    padding:20px 50px;
background-color:${ThemeColors.white};
display:flex;
flex-direction:column;  

width:350px  
}
  @media ${devices.mobileM} {
    padding:20px 50px;
background-color:${ThemeColors.white};
display:flex;
flex-direction:column;  

width:325px  
} @media ${devices.mobileS} { 
  padding:20px 50px;
background-color:${ThemeColors.white};
display:flex;
flex-direction:column; 
width:270px  
 }
`
export const CardText = styled.div`
   
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 30px;
text-align:center;
color:${ThemeColors.cardtext}`

export const LabelText = styled.div`
   
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 30px;
margin-top:20px;
color:${ThemeColors.cardtext}`

export const SubSignHolder = styled.div`
   display:flex;
   flex-direction:column;
    margin-top:20px

`
export const SubSignText = styled.div`
font-family: 'Calibri';
font-style: normal;
font-weight: 400;
font-size: 14px; 
cursor:pointer;
color:${ThemeColors.cardtext};
line-height: 20px


`
export const ForgotPasswordText = styled.div`
font-family: 'Calibri';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;

cursor:pointer;
color:${ThemeColors.forgotpasswordtext}
`

export const Subholderdata = styled.div`
margin-top:20px
`
export const Input = styled.input`
   
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
display: flex;
  padding: 10px;
  width: 70%;
  min-width: max-content;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0 2px 10px var(--blackA7); 

`