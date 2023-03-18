import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useContext } from 'react';
import { Context } from './ThemeContext';
const FullSimpleInput = (prop) => {
    const { setValueC, valueC } = useContext(Context);
    console.log(prop)
    
    return ( 

<TextField
        helperText=""
        id="demo-helper-text-aligned"
         style={{marginTop:20}}
         onChange={e=>{
          localStorage.setItem(prop,e.target.value)
         }}
      /> 
    )
}

export default FullSimpleInput
