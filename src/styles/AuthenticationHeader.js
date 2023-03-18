import { useEffect } from "react";
import styled from "styled-components";
import { ThemeColors } from "../constants/colors";
import { devices } from "../constants/Data/Data";


export const MainHolder = styled.div` 
height:80px;
background-color:${ThemeColors.footer}

`;

export const ContainerMain = styled.div`
   display:flex;
   width:100%; 
   height:60px;
   justify-content:space-between; 
   flex-direction:row;
   padding-left:30px;
   padding-right:30px;
`;
export const TitleHolder = styled.div`
   display:flex;
  align-self:center; 
  justify-content:center;
  background-color: white;
  align-items:center;
  padding-left:10px;
  padding-right:10px;
  padding-top:5px;
  padding-bottom:5px;  

 
`;
export const TitleHolders = styled.div`
   display:flex;
  align-self:center; 
  justify-content:center;
  align-items:center; 
  padding-right:10px;
  padding-top:5px;
  padding-bottom:5px;  

`;
export const TitleText = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color:${ThemeColors.white}
 cursor: pointer;

`;

export const LinkTo = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
cursor:pointer;
color:${ThemeColors.white};
text-decoration:underline ;  display:flex;
  align-self:center;
  margin-left:30px;


  @media ${devices.laptop} {
    max-width: 800px;
  }


  @media ${devices.laptopL} {
    max-width: 800px;
  }
  @media ${devices.desktop} {
    max-width: 800px;
  }
  @media ${devices.tablet} {
    max-width: 800px;
  }
  @media ${devices.mobileL} {
    display:none
  }
  @media ${devices.mobileM} {
    display:none
  } @media ${devices.mobileS} {
    display:none
 }

`;





