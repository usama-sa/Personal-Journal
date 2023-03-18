import styled from "styled-components";
import { ThemeColors } from "../constants/colors";

// Styled component named StyledButton
export const FooterHolder = styled.div`
 display: flex;
 justify-content:center;
 flex-direction:column;
 align-items:center;
 background-color:${ThemeColors.footer};
 padding:20px;

  width: 100%;
  text-align: center;
left:0;
right:0;
margin-top: 0vh;


 
`;

export const FooterHeading = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 33px;
margin-bottom:10px
 
`;

export const FooterText = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 27px;
cursor:pointer;
margin-top:5px;
cursor: pointer;
&:hover {
    color: white;
  }
`