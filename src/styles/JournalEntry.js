import styled from "styled-components";
import { ThemeColors } from "../constants/colors";
import { devices } from "../constants/Data/Data";

// Styled component named StyledButton
export const EntryMain = styled.div`

 @media ${devices.laptopL} {
    padding:10px 20px;
background-color:${ThemeColors.white};
 border-color: #92a8d1;
 height:770px;
 margin-top:50px;
 margin-bottom:50px;
 width:600px;
   }
   @media ${devices.laptop} {
    padding:10px 20px;
background-color:${ThemeColors.white};
 border-color: #92a8d1;
 height:770px;
 margin-top:50px;
 margin-bottom:50px;
 width:600px;
   }

  @media ${devices.desktop} {
    padding:10px 20px;
background-color:${ThemeColors.white};
 border-color: #92a8d1; 
 margin-top:50px;
 margin-bottom:50px;
 width:800px;
 height:777px
     }
@media ${devices.tablet} {
    padding:10px 20px;
background-color:${ThemeColors.white};
 border-color: #92a8d1; 
 margin-top:50px;
 margin-bottom:50px;
 width:410px;
   
}
  @media ${devices.mobileL} {
    padding:10px 20px;
background-color:${ThemeColors.white};
 border-color: #92a8d1; 
 margin-top:50px;
 margin-bottom:50px;
 width:300px;
    
}
  @media ${devices.mobileM} {
    padding:10px 20px;
background-color:${ThemeColors.white};
 border-color: #92a8d1; 
 margin-top:50px;
 margin-bottom:50px;
 width:280px;
   
} @media ${devices.mobileS} { 
    padding:10px 20px;
background-color:${ThemeColors.white};
 border-color: #92a8d1; 
 margin-top:50px;
 margin-bottom:50px;
 width:200px;   
 
 height:877px
 }
`;
export const TitleRow = styled.div`
      display:flex;
      flex-direction:row;
      justify-content:space-between;

      @media ${devices.mobileL} {
        display:flex;
      flex-direction:column;
      justify-content:space-between;
}
  @media ${devices.mobileM} {
    display:flex;
      flex-direction:column;
      justify-content:space-between;
   
} @media ${devices.mobileS} { 
    display:flex;
      flex-direction:column;
      justify-content:space-between;
 }
`;
export const TitleInput = styled.input`
padding:10px;
border-width:0px; 
    outline: none;
font-size:30px;
width:200px;
display:flex;
text-align:center;
margin:auto;
@media ${devices.mobileS} { 
    padding:10px;
border-width:0px; 
    outline: none;
font-size:30px;
width:100px;
display:flex;
text-align:center;
margin:auto;
 }


`

export const SaveButton = styled.div`
display:flex;
justify-content:center;
align-items:center
`
export const Savetext = styled.div`
font-family: 'Calibri';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 22px;
color:${ThemeColors.savebtn};
cursor:pointer;
margin-left:10px;
`

export const StarIcon = styled.image`
width:50px;
height:50px;
display:flex;
justify-content:Center;
align-items:Center;
align-self:Center

`

export const BtnHoldd = styled.div`
display:flex;
flex-direction:row;
@media ${devices.mobileS} { 
    display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
margin-top:30px;
align-self:center
 }
 @media ${devices.mobileM} { 
    display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
margin-top:30px;
align-self:center
 }
 @media ${devices.mobileL} { 
    display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
margin-top:30px;
align-self:center
 }
`