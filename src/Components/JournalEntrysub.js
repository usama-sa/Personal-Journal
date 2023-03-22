import { React, useState, useEffect } from 'react'
import { BtnHoldd, EntryMain, SaveButton, Savetext, StarIcon, TitleInput, TitleRow } from '../styles/JournalEntry'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ToolBar from './ToolBar';
import { MainImages } from '../assets/images/Image';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import ReactQuill from 'react-quill';
import { useLocation, useNavigate } from 'react-router-dom';

import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import { ActiveJournal, AddFavourites, AddJournalEntry, AddJournalEntryDraft, AddQuotes, EntriesList, JournalsList } from '../Apis/Apis';
import { Badge } from 'react-bootstrap';
import axios from 'axios';
import { btnhold } from './../styles/JournalEntry';
const modules = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }],
        // ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
        ["link", "image", "video"],
        ["clean"]
    ],
}
const JournalEntrySub = () => {
    const navigate = useNavigate()
    const [starState, setstarState] = useState()
    const [title, setTitle] = useState("")
    const [edit, seteditable] = useState(false)
    const detail = "qqqqqqqqqq"
    function handleClick() {
        AddFavourites(parseInt(row.split("=")[1])).then(e => {
            if (e.success === 0) {
                navigate("/")
                localStorage.clear()
                window.location.reload()
            }
            else {
                toast(e.message)
                setLoad(false)
            }
        })
        // alert(a);

    }

    function handleTitle(text) {
        console.log(text, "check it out")
        setTitle(text)
        AddDrafts(value,text)


    }
    function AddDrafts(e,f) {
        AddJournalEntryDraft(parseInt(row.split("=")[1]), f, e).then(e => {
            if (e.success === 0) {
                navigate("/")
                localStorage.clear()
                window.location.reload()
            }
            console.log(e)
        })
    }
    function ActiveDrafts() {
        AddQuotes(parseInt(row.split("=")[1]), quotation ? quotes[random].text : getquotes).then((f) => {
            console.log(f)
            if (f.success === 0) {
                navigate("/")
                localStorage.clear()
                window.location.reload()
            }
            else if (f.status === true) {
                ActiveJournal(parseInt(row.split("=")[1])).then(e => {
                    if (e.success === 0) {
                        navigate("/")
                        localStorage.clear()
                        window.location.reload()
                    }
                    else {
                        if (e.status == false) {
                            toast.error(e.message)
                        }
                        else {
                            toast.success("Saved Successfully. This is now Active")
                            navigate("/list")
                        }

                    }
                    console.log(e)
                })
            }
            else {
                toast.error("Something went wrong.")
            }

        })

    }


    const location = useLocation()
    const path = location.pathname.split("/")[2].split("&&")[0]
    const split = location.pathname.split("&&")
    const type = split[1]
    const row = split[2]
    const editable = split[3]
    const [random, setrandom] = useState()
    const [timer, setTimer] = useState(false)
    function handleSafe(a) {
        setLoad(true)
        if (path && type && row && editable) {
            ActiveDrafts()
        }
        else {
            AddJournalEntry(path, title, value, quotation ? quotes[random].text : null, a).then(e => {
                if (e.success === 0) {
                    navigate("/")
                    localStorage.clear()
                    window.location.reload()
                }
                else {

                    console.log(e)
                    if (e.status == false) {
                        toast.error(e.message)
                        setLoad(false)
                    }
                    else {
                        toast.success(e.message)
                        setLoad(false)
                        navigate("/list")
                    }
                }

            })


        }

        var saveItems = [];

    }


    const [jitems, setjitems] = useState([])

    const [tabledata, settabledata] = useState()
    const [idr, setidr] = useState(false)
    const [draft, setDraft] = useState()
    const [valT, setValT] = useState([])
    const [valD, setValD] = useState("")
    const [journalT, setJournalT] = useState([])
    function FilteredEntry() {
        const a = jitems.filter((data) => data.id === path).entry_title

    }
    const [abc, setabc] = useState("")
    const [quotation, setquotation] = useState(false)

    const [value, setValue] = useState('');
    const [getquotes, setGetQuotes] = useState(null);
    const [load, setLoad] = useState(false)
    const [pageload, setpageLoad] = useState(false)
    // localStorage.setItem(title,value)
    var drafteditems = [];
    const [quotes, setquotes] = useState([])
    const a = 0

    drafteditems.push({ id: a + 1, entry_title: title, entrydescription: value })
    localStorage.setItem('draftentry', JSON.stringify(drafteditems))
    console.log(value, "texteditorvalue")
    const Filteredvalue = jitems.filter((filval) => { return filval.id == path })
    const filvalfinal = Filteredvalue.map((data) => { return data.entrydescription })


    useEffect(() => {
        async function getQuotes() {
            await axios.get("https://type.fit/api/quotes").then((e) => {
                setquotes(e.data)
            })
        }
        getQuotes()

    }, [])
    useEffect(() => {
        // setisloading(true)

        setpageLoad(true)


        if (type && row && editable) {
            JournalsList().then(e => {
                if (e.success === 0) {
                    navigate("/")
                    localStorage.clear()
                    window.location.reload()
                }
                else {

                    setJournalT(e.Journals.filter(f => f.id === parseInt(path)))

                    setTitle(e.Journals.filter(f => f.id === parseInt(path))[0].entrieslist.filter(f => f.id === parseInt(row.split("=")[1]))[0].entry_title)
                    setValue(e.Journals.filter(f => f.id === parseInt(path))[0].entrieslist.filter(f => f.id === parseInt(row.split("=")[1]))[0].description)
                    setstarState(e.Journals.filter(f => f.id === parseInt(path))[0].entrieslist.filter(f => f.id === parseInt(row.split("=")[1]))[0].isFavourite)
                    setGetQuotes(e.Journals.filter(f => f.id === parseInt(path))[0].entrieslist.filter(f => f.id === parseInt(row.split("=")[1]))[0].quote)
                    console.log(e.Journals.filter(f => f.id === parseInt(path))[0].entrieslist.filter(f => f.id === parseInt(row.split("=")[1]))[0].quote, "quotess")
                    setpageLoad(false)

                }
            })
            setDraft(true)
        }
        else {
            setDraft(false)
            EntriesList().then(data => {

                if (data.success === 0) {
                    navigate("/")
                    localStorage.clear()
                    window.location.reload()
                } else {
                    setjitems(data.message)
                    setpageLoad(false)
                }
            })

        }

        if (path == 0) {
            // eslint-disable-next-line no-unused-expressions
            setValue("")
            setTitle("")
        } else {

            // setValue("qwerty")


            // Filteredvalue.map((data)=> setValue( data.entrydescription))
            // setTitle(data.entrytitle) 

        }


    }, [load])


    var bgcolors = localStorage.getItem("bgcolor")

    return (
        <div style={{ pointerEvents: load || pageload ? "none" : "" }}>
            {load || pageload && <div class="text-center">
                <div class="spinner-border" role="status">
                </div>
            </div>
            }
            {draft === undefined ? null : <EntryMain>
                <div  >
                    <svg style={{ cursor: 'pointer' }} onClick={() => navigate('/Journalcover')} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    <p>{timer && <p style={{ fontSize: "8px", fontStyle: "italic" }}>Changes auto-saved as draft moment ago at ({new Date().toLocaleTimeString()})</p>}</p>
                </div>
                <TitleRow>
                    {
                        draft && <img src={starState ? MainImages.selected_star : MainImages.favourite} style={{ width: 30, height: 30, marginTop: 20 }} onClick={() => {
                            setLoad(true)
                            handleClick()
                        }
                        } />

                    }

                    <TitleInput type='text' defaultValue=
                        {draft ? title : null} placeholder='Entry Title' onChange={(e) => {
                            handleTitle(e.target.value)
                        }} />
                    <BtnHoldd>
                        <SaveButton onClick={() => handleSafe(1)}>
                            <Savetext>
                                <Badge bg="success">

                                    Save
                                </Badge>
                            </Savetext>
                        </SaveButton>
                        {!draft && <SaveButton onClick={() => handleSafe(0)}>
                            <Savetext>
                                <Badge bg="info">

                                    Draft
                                </Badge>
                            </Savetext>
                        </SaveButton>}
                    </BtnHoldd>


                </TitleRow>
                {/* <ToolBar /> */}

                {(getquotes == undefined || getquotes == null) && <img src={MainImages.lightbulb} style={{ width: 30, height: 30, cursor: "pointer", marginTop: 20, marginBottom: 20 }} onClick={() => {
                    setrandom(Math.floor(Math.random() * 100)
                    )
                    setquotation(!quotation)
                }


                } />}

                {
                    (quotation || (getquotes && getquotes.length > 0)) && <div style={{ backgroundColor: "#fadb6e", display: "flex", justifyContent: "center", alignItems: "center", padding: 20, marginTop: 20, marginBottom: 20, borderRadius: 10 }}>
                        <div style={{ fontSize: 18, fontWeight: "600" }}>

                            {
                                getquotes && getquotes.length > 0 ? getquotes : quotes[random].text
                            }
                        </div>
                    </div>
                }

                <ReactQuill theme="snow" onKeyUp={() => {
                    const timeoutId = setTimeout(() =>
                        setTimer(true), 8000);
                    return () => clearTimeout(timeoutId);
                }} value={value} onChange={(e) => {
                    setTimer(false)
                    setValue(e)
                    AddDrafts(e,title)
                }} modules={modules} style={{ height: 400 }} />

                {/* <ReactQuill theme="bubble"/> */}
                {/* <ReactQuill theme="snow" value={value} modules={modules} style={{ height: 400 }} /> */}

                {/* {value} */}

            </EntryMain>}
            <ToastContainer />
        </div>
    )
}

export default JournalEntrySub
