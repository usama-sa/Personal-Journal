import { MainTag, Tagtext } from '../styles/Tags'
// import React from 
import { React, useState } from 'react'
import Box from '@mui/material/Box';
import Modal from 'react-modal';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import Typography from '@mui/material/Typography';
import ThemeSelector from './ThemeSelector';
import TagSelector from './TagSelector';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
// import Modal from '@mui/material/Modal';
const Tags = ({ tag, style, image, id }) => {
    let subtitle;
    const [modalIsOpens, setIsOpens] = useState(false);

    function openModal() {
        setIsOpens(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpens(false);
        console.log(modalIsOpens)
    }
    function handleClick() {
        if (id === 1) {
            openModal()
        }
        else if (id === 2) {
            openModal()
        }
        else {
            // alert("New Journal")

        }
    }
    return (
        <>
            <MainTag style={style} onClick={() => handleClick()}>

                <img src={image} />

                <Tagtext>
                    {tag}
                </Tagtext>

            </MainTag>
            <Modal
                isOpen={modalIsOpens}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {/* <button onClick={()=>setIsOpen(false)}>close sjsjsj</button> */}


                {/* <p onClick={() => setIsOpen(false)}>close</p> */}

                {
                    id === 1 ? <ThemeSelector /> : <TagSelector />
                }

                {
                    id === 1 ? <p style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: 20, marginTop: 30, cursor: "pointer", backgroundColor: "lightgrey" }} onClick={() => closeModal()}>Set This Theme</p> : <p style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: 30, marginTop: 30, cursor: "pointer", backgroundColor: "lightgrey" }}
                        onClick={() => {
                            closeModal()
                            window.location.reload()
                        }

                        }>Set This Tag</p>
                }



            </Modal>
        </>
    )
}

export default Tags 