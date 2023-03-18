import { createGlobalStyle } from 'styled-components'
import { ThemeColors } from '../constants/colors'
import * as value from "../styles/Theme.style"
import { useContext } from 'react'
import ThemeSelector from '../Components/ThemeSelector'
// console.log({ value }, "objectss")
// const value = React.useContext(UserContext);
// console.log("pppppppobject", value)

// console.log("object")

// function Checkfunc() {
//     const { theme } = useContext(ThemeSelector)
//     console.log("object", theme.colors.background)

//     return theme.colors.background


// }
export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    /* color: ${props => (props.darkMode ? 'white' : 'black')}; */
    overflow-x: hidden;

  }

 .body-comp{
display: flex; 
 flex-direction:column;
 justify-content:center;
 align-items:center; 
 background-color: green;
 padding:30px 20px
 }


  // theme buttons color
.light {
  background-color: hsl(0, 0%, 93%); 
}
.dark {
background-color: hsl(0, 0%, 20%);
}
.blue {
  background-color: hsl(195, 53%, 79%);
}
.green {
  background-color: hsl(150, 80%, 15%);
}
.brown {
  background-color: hsl(39, 70%, 50%);
}
.pink {
  background-color: hsl(350, 100%, 88%);
}

// active theme
.active{
    border: 3px solid hsl(0, 0%, 87%);
    }
`
