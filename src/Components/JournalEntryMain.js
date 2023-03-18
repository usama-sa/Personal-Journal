import React from 'react'
import { MainContainer } from '../styles/JournalEntryMain'
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import { Box } from '@mui/material';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import JournalEntry from './JournalEntrysub';
import JournalEntrySub from './JournalEntrysub';
import { useLocation } from 'react-router-dom';

const JournalEntryMain = () => {
    const a = localStorage.getItem("bgc")
    console.log("object", a)
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    try {
        console.log(decodeURI(path),"popopop");
        // Expected output: "https://mozilla.org/?x=шеллы"
      } catch (e) { // Catches a malformed URI
        console.error(e);
      }
      
          console.log( decodeURI({path}), "path")
          var bgcolors = localStorage.getItem("bgcolor")

    return (
        <MainContainer style={{
            backgroundColor: bgcolors, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
        }}>
            <JournalEntrySub />
        </MainContainer>
    )
}

export default JournalEntryMain
