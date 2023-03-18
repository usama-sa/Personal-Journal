import styled from "styled-components";
import { ThemeColors } from "../constants/colors";

// Styled component named StyledButton
export const SearchMain = styled.input`

border-radius:20px;
padding:5px;
background-color:${ThemeColors.searchback};
border-width:0px;
outline-width: 0;
padding:5px 15px; 
font-size:18px;
color:white


 
`;

export const SearchHolder = styled.div`
   
    margin-top:12.5px
    
`
