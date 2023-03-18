import styled from "styled-components";
import { ThemeColors } from "../constants/colors";
import { devices } from "../constants/Data/Data";

export const MainHolder = styled.div`
display:flex;
flex:1
`;

export const ContainerMain = styled.div`
   display:flex;
   width:100%;
   background-color: ${ThemeColors.footer};
   height:60px;
   justify-content:center; 
   align-items:center;
   flex-direction:row;
   padding-left:50px;
   padding-right:50px;
   @media ${devices.mobileL} {
      display:flex;
   width:100%;
   background-color: ${ThemeColors.footer};
   height:60px;
   justify-content:center; 
   align-items:center;
   flex-direction:column;
   padding-left:50px;
   padding-right:50px;
    
}
  @media ${devices.mobileM} {
   display:flex;
   width:100%;
   background-color: ${ThemeColors.footer};
   height:60px;
   justify-content:center; 
   align-items:center;
   flex-direction:column;
   padding-left:50px;
   padding-right:50px;
   
} @media ${devices.mobileS} { 
   display:flex;
   width:100%;
   background-color: ${ThemeColors.footer};
   height:60px;
   justify-content:center; 
   align-items:center;
   flex-direction:column;
   padding-left:50px;
   padding-right:50px;
   
 }
`; 
