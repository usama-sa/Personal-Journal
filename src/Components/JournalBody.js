

import { MainImages, TagImages } from "../assets/images/Image"
import { JournalName, JournalNametext, OptionHolder } from "../styles/Journalname"
import { MainContainer } from "../styles/SignInBody"
import JournalEntryMain from "./JournalEntryMain"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import { TagsImageList } from "../constants/Data/Data"
import { CreateFirstJournal, EditJournal, JournalsList, LockJournal, UnLockJournal } from "../Apis/Apis";
import { Badge } from "react-bootstrap";
import { TextField } from "@mui/material"
import { Input, LabelText } from "../styles/SignInCard";
import './styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BookImg, JournalTitle, OptionImages, TagImg } from "../styles/JournalBody";
// const path = require("../../src/assets/images/`${a}`")
const JournalBody = ({ style }) => {
  const navigate = useNavigate()
  const [tagname, settagname] = useState([])
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const [password, setPassword] = useState("")
  const [passwordR, setPasswordR] = useState("")
  const [id, setId] = useState()
  const [journals, setJournals] = useState([])
  const [title, setTitle] = useState("")
  const [type, setType] = useState("")
  const [edittitle, setEdit] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleShow3 = () => setShow3(true);
  const handleClose3 = () => setShow3(false);
  console.log("TagName", (tagname))
  let a = JSON.parse(localStorage.getItem("tag"))



  useEffect(() => {
    setLoad(true)
    const uid = localStorage.getItem("user")
    setPassword("")
    setPasswordR("")

    JournalsList().then(e => {
      if (e.success === 0) {
        navigate("/")
        localStorage.clear()
        window.location.reload()
      }
      else {
        localStorage.setItem("journal", e.Journals.filter(f => f.user_id == parseInt(uid)).length > 0 ? e.Journals.filter(f => f.user_id == parseInt(uid))[0].id : undefined)
        setJournals(e.Journals.filter(f => f.user_id == parseInt(uid)))
        setLoad(false)
      }
    })

  }, [show, show1])

  return (
    <div style={style}>



      <>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Lock Your Journal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
              <h4>You're going to lock your journal {journals && journals.filter(f => f.id == id).map(e => e.journaltitle)}.</h4>
              <LabelText>
                Password
              </LabelText>
              <input className="input-in" type='password' onChange={e => setPassword(e.target.value)} />
              <LabelText>
                Re-Type Password
              </LabelText>
              <input className="input-in" type='password' onChange={e => setPasswordR(e.target.value)} />
              <p>{passwordR.length > 0 && password.length > 0 && password === passwordR ? null : passwordR.length > 0 && password.length > 0 && password !== passwordR ? <p style={{ color: 'red' }}>passwords do not match</p> : null}</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {passwordR.length > 0 && password.length > 0 && password === passwordR ?
              <> <Button variant="primary" onClick={() =>

                LockJournal(id, password).then(e => {
                  if (e.success === 0) {
                    navigate("/")
                    localStorage.clear()
                    window.location.reload()
                  }
                  else {

                    console.log(e)
                    handleClose()
                  }
                })
              }>
                Add password
              </Button>
              </> :
              <Button variant="primary" disabled>
                Add password
              </Button>}
          </Modal.Footer>
        </Modal>
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Let's create your Journal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
              <p>You are creating a new journal. This will help you to keep track of your items simultaneously </p>
              <LabelText>Journal Title</ LabelText>
              <input className="input-in" onChange={e => {
                setTitle(e.target.value)
              }} />
              <LabelText>Journal Type</LabelText>
              <input className="input-in" onChange={e => {
                setType(e.target.value)
              }} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Close
            </Button>

            {title && type ? <Button variant="primary" onClick={
              () => {

                CreateFirstJournal(parseInt(localStorage.getItem("user")), title, type).then(e => {
                  if (e.success === 0) {
                    navigate("/")
                    localStorage.clear()
                    window.location.reload()
                  }
                  else
                    if (e.status === true) {
                      window.location.reload()
                    }
                    else {
                      toast.error(e.message)
                    }
                })
              }

            }>
              Create
            </Button> : <Button variant="primary" disabled>
              Create
            </Button>}
          </Modal.Footer>
        </Modal>

        <Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title>UnLock Your Journal</Modal.Title>
          </Modal.Header>
          <Modal.Body><h4>Let's unlock your journal {journals && journals.filter(f => f.id == id).map(e => e.journaltitle)}.</h4>
            <LabelText>
              Password
            </LabelText>

            <input className="input-in" type='password' onChange={e => setPassword(e.target.value)} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
            {password.length > 0 ?
              <> <Button variant="primary" onClick={() =>

                UnLockJournal(id, password).then(e => {
                  if (e.success === 0) {
                    navigate("/")
                    localStorage.clear()
                    window.location.reload()
                  }
                  else {

                    console.log(e)
                    handleClose1()
                  }
                })
              }>
                Confirm
              </Button>
              </> :
              <Button variant="primary" disabled>
                Confirm
              </Button>}
          </Modal.Footer>
        </Modal>
        <Modal show={show3} onHide={handleClose3}>
          <Modal.Header closeButton>
            <Modal.Title style={{ display: "flex", textAlign: "center" }}>Edit Journal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
              <p>You're going to edit your journal title <h5>{journals && journals.filter(f => f.id == id).map(e => e.journaltitle)}.</h5> </p>
              <LabelText>Journal Title</ LabelText>
              <input className="input-in" onChange={e => {
                setEdit(e.target.value)
              }} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose3}>
              Close
            </Button>

            {edittitle ? <Button variant="primary" onClick={
              () => {

                EditJournal(parseInt(localStorage.getItem("user")), edittitle).then(e => {
                  if (e.success === 0) {
                    navigate("/")
                    localStorage.clear()
                    window.location.reload()
                  }
                  else
                    if (e.status === true) {
                      window.location.reload()
                    }
                    else {
                      toast.error(e.message)
                    }
                })
              }

            }>
              Save
            </Button> : <Button variant="primary" disabled>
              Save
            </Button>
            }
          </Modal.Footer>
        </Modal>
      </>

      {load ?

        <div style={{ position: "relative", textAlign: "center", marginTop: 10, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>
          <BookImg src={MainImages.bookimg} />
          <div style={{ position: "absolute", color: "white", bottom: "35%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>
            <TagImg src={a} />

            <p style={{ fontSize: 50, fontWeight: "700", textAlign: "center" }}>
              Loading...
            </p>




            <hr></hr>

            <OptionHolder style={{ marginTop: 40 }}>


              <OptionHolder style={{ margin: 'auto', cursor: "pointer", fontSize: 20 }} >
                <Badge bg="success">Loading</Badge>
              </OptionHolder>
            </OptionHolder>

          </div>
        </div>
        :
        journals.length == 0 ?
          <div style={{ position: "relative", textAlign: "center", marginTop: 10, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>
            <BookImg src={MainImages.bookimg} />

            <div style={{ position: "absolute", color: "white", bottom: "35%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>
              <TagImg src={a} />

              <JournalTitle>
                My First Journal
              </JournalTitle>




              <hr></hr>

              <OptionHolder style={{ marginTop: 40 }}>


                <OptionHolder style={{ margin: 'auto', cursor: "pointer", fontSize: 20 }} onClick={() => {
                  handleShow2()
                }}>
                  <Badge bg="success">Create New Journal</Badge>
                </OptionHolder>
              </OptionHolder>

            </div>
          </div>
          : journals.map((e) => (
            <div style={{ position: "relative", textAlign: "center", marginTop: 10, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>
              <BookImg src={MainImages.bookimg} />
              <div style={{ position: "absolute", color: "white", bottom: "35%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>
                <TagImg src={a} />
                <div style={{ cursor: 'pointer', marginLeft: 20, marginTop: 20 }} onClick={() => {
                  setId(e.id)

                  handleShow3()
                }}>


                  <JournalTitle>
                    {e.journaltitle}

                  </JournalTitle>
                </div>











                {e.isLocked == 0 ?
                  <>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginRight: 40 }}>

                      <OptionHolder style={{ cursor: "pointer", marginTop: 30 }}>



                        <OptionHolder style={{ marginLeft: 50, cursor: "pointer" }} onClick={() => navigate("/Journalentry/" + e.id)}>
                          <OptionImages src={MainImages.new} />
                        </OptionHolder>
                        <OptionHolder style={{ marginLeft: 40, cursor: "pointer" }} onClick={() => navigate("/list")}>


                          <OptionImages src={MainImages.listview} />


                        </OptionHolder>

                        <OptionHolder style={{ marginLeft: 40, cursor: "pointer" }}
                          onClick={() => {
                            setId(e.id)
                            handleShow()
                          }}>

                          <OptionImages src={MainImages.lock} />


                        </OptionHolder>
                      </OptionHolder></div>

                  </> : <p
                    style={{ margin: 'auto', cursor: 'pointer' }}
                    onClick={() => {
                      setId(e.id)
                      handleShow1()
                    }
                    }
                  ><Badge bg="danger">LOCKED <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-lock" viewBox="0 0 20 20">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                  </svg></Badge></p>}



              </div>
            </div>
          ))
      }
      <ToastContainer />

    </div>
  )
}

export default JournalBody
