import styled from "styled-components";
import { ThemeColors } from "../constants/colors";
import { devices } from "../constants/Data/Data";

// Styled component named StyledButton
export const DataHolder = styled.div`

width:100%; 
height:350px;
padding:30px

`;

export const FiltersRow = styled.div`

 
@media ${devices.laptopL} {
    display:flex;
flex-direction:row;
justify-content:space-between;
padding:30px
   }

  @media ${devices.desktop} {
    display:flex;
flex-direction:row;
justify-content:space-between;
padding:30px
     }
@media ${devices.tablet} {
    display:flex;
flex-direction:column;
justify-content:space-between;
padding:30px
   
}
  @media ${devices.mobileL} {
    display:flex;
flex-direction:column;
justify-content:space-between;
padding:30px
    
}
  @media ${devices.mobileM} {
    display:flex;
flex-direction:column;
justify-content:space-between;
padding:30px
   
} @media ${devices.mobileS} { 
    display:flex;
flex-direction:column;
justify-content:space-between;
padding:30px   
 }
`;

export const ViewButton = styled.div`
border-radius:5px;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
background-color:${ThemeColors.success};
height:40px;
padding:1px 20px;
 
margin-right:2.5px;
@media ${devices.mobileS} { 
    border-radius:5px;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
background-color:${ThemeColors.success};
height:40px;
padding:1px 20px;
 margin-top:15px;
margin-right:2.5px;


 }
`;

export const DeleteButton = styled.div`
border-radius:5px;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
background-color:${ThemeColors.danger};
height:40px;
padding:1px 20px; 
 
@media ${devices.mobileS} { 
    border-radius:5px;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
background-color:${ThemeColors.danger};
height:40px;
padding:1px 20px; 
margin-top:15px


 }

`;
export const GeneralRow = styled.div`



@media ${devices.laptopL} {
    display:flex;
flex-direction:row;
   }

  @media ${devices.desktop} {
    display:flex;
flex-direction:row;
     }
@media ${devices.tablet} {
    display:flex;
flex-direction:row; 
margin-top:30px
   
}
  @media ${devices.mobileL} {
    display:flex;
flex-direction:row; 
margin-top:30px
    
}
  @media ${devices.mobileM} {
    display:flex;
flex-direction:row; 
margin-top:30px
   
} @media ${devices.mobileS} { 
    display:flex;
flex-direction:column;
margin-top:30px ;


 }


`
export const BtnText = styled.div`
color:${ThemeColors.white};
font-weight:600;
font-size:15px

`