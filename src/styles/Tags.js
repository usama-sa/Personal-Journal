import styled from "styled-components";
import { ThemeColors } from "../constants/colors";
import { devices } from "../constants/Data/Data";

// Styled component named StyledButton
export const MainTag = styled.div`
 display: flex;
 justify-content:center;
 align-items:center; 
 flex-direction:row; 
 margin-left:20px; 
 padding:5px 15px; 
 border-radius:10px;
 flex-direction:row;
 cursor:pointer;

 @media ${devices.mobileL} {
    display: flex;
 justify-content:center;
 align-items:center; 
 flex-direction:row; 
 margin-left:20px; 
 padding:5px 15px; 
 border-radius:10px;
 flex-direction:row;
 cursor:pointer;
 margin-bottom:5px
    
}
  @media ${devices.mobileM} {
    display: flex;
 justify-content:center;
 align-items:center; 
 flex-direction:row; 
 margin-left:20px; 
 padding:5px 15px; 
 border-radius:10px;
 flex-direction:row;
 cursor:pointer;
 
 margin-bottom:5px
   
} @media ${devices.mobileS} { 
    display: flex;
 justify-content:center;
 align-items:center; 
 flex-direction:row; 
 margin-left:20px; 
 padding:5px 15px; 
 border-radius:10px;
 flex-direction:row;
 cursor:pointer;
 
 margin-bottom:5px;
 margin-top:5px
   
 }

`;

export const Tagtext = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px; 
color:${ThemeColors.white};
margin-left:10px


`