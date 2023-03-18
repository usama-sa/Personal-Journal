import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ContainerMain, LinkTo, MainHolder, TitleHolder, TitleHolders, TitleText } from '../../styles/AuthenticationHeader';
import SignInBody from '../SignInBody';
import SearchBox from '../SearchBox';
import { Link, useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';


const AuthenticationHeader = ({ loginto, search }) => {
  // console.log("object", props.search)
  const navigate = useNavigate()


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setUser] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('@storage_Key')
    if (user) {
      setUser(true)
    }
  }, [])
  const bgcolors = localStorage.getItem("bgcolor")
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body><h5>Are you Sure you want to LOGOUT?</h5>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="primary" onClick={() => {
            localStorage.clear();
            navigate('/');
            window.location.reload()
          }}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
      <MainHolder>
        <ContainerMain style={{backgroundColor:bgcolors?bgcolors:"green"}}>

          <TitleHolders>
            <TitleText style={{color:"white"}}>
              Personal Journal
            </TitleText>

          </TitleHolders>
          {
            search === "true" ? <SearchBox /> : <></>
          }
          <LinkTo onClick={() => loginto === "Sign In" ? navigate("/") : navigate("/Register")}>
            {loginto}
          </LinkTo>
          {user ?
            <TitleHolder onClick={() => {
              handleShow()
            }}>
              <TitleText style={{color:bgcolors,cursor:'pointer'}}>
                Logout
              </TitleText>

            </TitleHolder>
            :
            <></>
          }

        </ContainerMain>
      </MainHolder>
    </>
  )
}

export default AuthenticationHeader
