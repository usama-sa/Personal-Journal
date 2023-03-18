import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { CardMain } from '../styles/ThemeCard';
import { useState, useEffect } from 'react';
import { MainImages, TagImages } from '../assets/images/Image';
import { SelectionColors, TagsImageList } from '../constants/Data/Data';
import ThemeContext from './ThemeContext';
import Modal from 'react-bootstrap/Modal';

import { brown, dark, light } from '../styles/Theme.style';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

const JournalSelector = () => {
    const { setTheme } = useContext(ThemeContext)
    const [handleState, sethandleState] = useState("")
    console.log("Letssayyyy", handleState)


    // function handleClick(name) {

    //     // setTheme(name)
    //     localStorage.setItem("tag", JSON.stringify(name))
    //     sethandleState(name)



    // }

    useEffect(() => {
        function handleClick() {

            // setTheme(name)
            localStorage.setItem("tag", JSON.stringify(handleState))
        
 


        }

        handleClick()
    }, [handleState])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <>
                <Grid container spacing={2}>
                    {TagsImageList.map((tag) => {
                        return (
                            <Grid item xs={6} md={4} lg={4}>

                                {
                                    tag.image === handleState ? <div onClick={() => sethandleState(tag.image)} style={{ cursor: "pointer", backgroundColor: "pink", display: "flex", justifyContent: "center", alignItems: "center", padding: 10 }}>
                                        <img src={tag.image} style={{ width: 150, height: 150 }} /></div> : <div onClick={() => sethandleState(tag.image)} style={{ cursor: "pointer", backgroundColor: "lightgreen", display: "flex", justifyContent: "center", alignItems: "center", padding: 10 }}>
                                        <img src={tag.image} style={{ width: 150, height: 150 }} /></div>
                                }




                            </Grid>
                        )
                    })}



                </Grid>


            </>
        </Box>
    )
}

export default JournalSelector