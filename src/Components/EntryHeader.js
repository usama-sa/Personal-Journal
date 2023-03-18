import React from 'react'
import { ContainerMain, MainHolder, TitleHolder, TitleText } from '../styles/AuthenticationHeader'
import { MainImages } from '../assets/images/Image'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';
const SideBar =[
    {id:1,route:"/journalcover",title:'Back to Journal'}, {id:2,title:'View All Entries',route:"/list"}
]
const EntryHeader = () => {
    const navigate = useNavigate()
    var bgcolors = localStorage.getItem("bgcolor")

    const [state, setState] = React.useState({

        left: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    }; const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {SideBar.map((text, index) => (
                    <ListItem key={text.id} disablePadding>
                        <ListItemButton
                        onClick={()=>{
                            navigate(text.route)
                        }}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <InboxIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />

        </Box>
    );


    return (

        <MainHolder style={{backgroundColor: bgcolors}}>
            <React.Fragment>
                <Drawer
                    anchor="left"
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                >
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "lightgray" }}>
                        
                         Journal App
                    </div>
                    {list("left")}

                </Drawer>

            </React.Fragment>
            <ContainerMain>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>           <img onClick={toggleDrawer("left", true)} src={MainImages.drawer} style={{ width: 30, height: 30, cursor: "pointer" }} />
                    {/* <img src={MainImages.home} style={{ width: 30, height: 30, marginLeft: 50, cursor: "pointer" }} /> */}
                    </div>

            </ContainerMain>
        </MainHolder>
    )
}

export default EntryHeader
