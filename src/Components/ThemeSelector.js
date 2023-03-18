import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { CardMain } from '../styles/ThemeCard';
import { useState } from 'react';
import { MainImages } from '../assets/images/Image';
import { SelectionColors } from '../constants/Data/Data';
import ThemeContext from './ThemeContext';
import Modal from 'react-bootstrap/Modal';

import { brown, dark, light } from '../styles/Theme.style';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ThemeSelector = () => {
    const { setTheme } = useContext(ThemeContext)

    function handleClick(name) {
        sethandleState(name)

        setTheme(name)
        localStorage.setItem("bgcolor", name.colors.background)
        console.log("Letssayyyy", typeof (name))


    }
    const [handleState, sethandleState] = useState()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <>
                <Grid container spacing={2}>
                    {SelectionColors.map((color) => {
                        return (
                            <Grid item xs={6} md={3} lg={2}>
                                {
                                    handleState === color.name ? <CardMain style={{ backgroundColor: color.name.colors.background }} onClick={() => handleClick(color.name)} >
                                        <img src={MainImages.tic} />
                                    </CardMain> : <CardMain style={{ backgroundColor: color.name.colors.background }} onClick={() => handleClick(color.name)} >
                                    </CardMain>
                                }

                            </Grid>
                        )
                    })}



                </Grid>


            </>
        </Box>
    )
}

export default ThemeSelector