import React, { useState, useEffect } from 'react'
import {
    DataGrid,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid';
import AuthenticationHeader from '../Components/AuthenticationHeader.js/AuthenticationHeader';
import Footer from '../Components/Footer/Footer';
import { ActionButtons, BtnText, DataHolder, DeleteButton, FiltersRow, GeneralRow, ViewButton } from '../styles/ListEntries';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Badge, Button } from 'react-bootstrap';
import { AddFavourites, AddFavouritess, DeleteEntry, DeleteSavedEntry, JournalsList } from '../Apis/Apis';
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { makeStyles } from '@mui/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let counter = 1


const useStyles = makeStyles({
    headerCell: {
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold',
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#def2ff',
        },
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    },
});

const columns = [
    {
        field: "id", headerName: 'ID', renderCell: (index) => (index.api.getRowIndexRelativeToVisibleRows(index.row.id) + 1), headerClassName: 'super-app-theme--header', flex: 0.3,
        minWidth: 150,

    },
    {
        field: 'entry_title', headerName: 'Entry Title', headerClassName: 'super-app-theme--header', width: 200,
    },
    {
        field: 'isActive', headerName: 'Status', headerClassName: 'super-app-theme--header', flex: 1,
        minWidth: 150,
    },

    // { field: 'EntryDescription', headerName: 'Entry Description', width: 200 },
    // {
    //     field: 'DateCreated',

    //     width: 150,
    // },

];

const TypeFilters = [
    {
        id: 0, name: "Drafted Entries"
    },
    {
        id: 1, name: "Saved Entries"
    },
    {
        id: 2, name: "All Entries"
    }
]
const rows = [{ id: 1, EntryTitle: "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss", EntryDescription: "ddw", DateCreated: "23" }, { id: 2, EntryTitle: "ss", EntryDescription: "ddw", DateCreated: "23" }, { id: 3, EntryTitle: "ss", EntryDescription: "ddw", DateCreated: "23" }]
const ListEntries = () => {
    const classes = useStyles();

    let counter = 1
    const [type, settype] = useState()
    const [load, setLoad] = useState(false)
    console.log("type", type)

    function handleFilter(e) {

    }
    const [selectedcount, setselectedcount] = useState(false)
    console.log(selectedcount, "selectedcount")
    localStorage.setItem("entries", "<h1>sss</h1>")

    const [jitems, setjitems] = useState([])
    const [jitemsF, setjitemsF] = useState([])
    const [jid, setJid] = useState()

    const [tabledata, settabledata] = useState()
    console.log(tabledata, "iidata")
    const [idr, setidr] = useState(false)
    console.log(jitems, "journo")

    useEffect(() => {
        // setisloading(true)
        JournalsList().then(data => {
            console.log(data, "dadasas")
            if (data.success === 0) {
                navigate("/")
                localStorage.clear()
                window.location.reload()
            }
            else {
                const id = localStorage.getItem("journal")
                setJid(id)

                setjitems(data.Journals && data.Journals.filter(f => f.id === parseInt(id))[0].entrieslist)
                setjitemsF(data.Journals && data.Journals.filter(f => f.id === parseInt(id))[0].entrieslist)
            }
        })
        // setisloading(false)
        // console.log(schedlist, "Sss")
    }, [load])

    const uri = encodeURI(1)
    const navigate = useNavigate()
    function HandleView() {
        navigate(`/Journalentry/${jid}&&type=draft&&row=${tabledata.row.id}&&editable=true`)
    }
    function HandleDelete() {
        setLoad(true)
        DeleteEntry(tabledata.row.id).then(e => {
            console.log(e, 'ddfdfd')
            if (e.success === 0) {
                setLoad(false)


            }
            else if (e.status === false) {
                setLoad(false)
                toast.error(e.message)

            }
            else {
                setLoad(false)
                setselectedcount(false)
                toast.success(e.success)



            }
        })
    }
    function CustomPagination() {
        const apiRef = useGridApiContext();
        const page = useGridSelector(apiRef, gridPageSelector);
        const pageCount = useGridSelector(apiRef, gridPageCountSelector);

        return (
            <Pagination
                color="primary"
                variant="outlined"
                shape="rounded"
                page={page + 1}
                count={pageCount}
                // @ts-expect-error
                renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
                onChange={(event, value) => apiRef.current.setPage(value - 1)}
            />
        );
    }
    const PAGE_SIZE = 5;


    const [paginationModel, setPaginationModel] = React.useState({
        pageSize: PAGE_SIZE,
        page: 0,
    });
    return (
        <div style={{ pointerEvents: load ? "none" : "" }}>
            <AuthenticationHeader />
            <div style={{ display: "flex", marginTop: '1%', cursor: 'pointer', padding: 30 }} onClick={() => navigate('/Journalcover')}>
                <h5><Badge bg='success'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
                </svg> Home</Badge></h5>
            </div>
            <FiltersRow>
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Journal Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            //   value={type}
                            style={{ minWidth: 200 }}
                            label="Select The type Of Journal"
                            onChange={(e) => {
                                if (e.target.value === 2) {
                                    setjitems(jitemsF)
                                }

                                else setjitems(jitemsF.filter(f => f.isActive === parseInt(e.target.value)))
                            }
                            }
                        >
                            {
                                TypeFilters.map((type) => {
                                    return (
                                        <MenuItem value={type.id}>{type.name}</MenuItem>

                                    )
                                })
                            }

                        </Select>
                    </FormControl>

                </Box>

                {
                    selectedcount && <GeneralRow>
                        {load ?
                            <ViewButton>
                                <BtnText>
                                    Please Wait</BtnText>
                            </ViewButton> :
                            <>
                                <ViewButton>
                                    <BtnText onClick={HandleView}>
                                        View Entry</BtnText>
                                </ViewButton>
                                <DeleteButton>
                                    <BtnText onClick={HandleDelete}>
                                        Delete Entry</BtnText>
                                </DeleteButton>
                            </>}

                    </GeneralRow>
                }



            </FiltersRow>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                <DataHolder>

                    {
                        <Box
                            sx={{
                                height: 300,
                                '& .super-app-theme--header': {
                                    width: '100%',
                                    backgroundColor: 'rgba(255, 7, 0, 0.55)',
                                },
                            }}
                        >
                            <DataGrid
                                classes={{ columnHeader: classes.headerCell, row: classes.row }}

                                options={{
                                    paging: false
                                }}
                                rows={jitems}
                                getRowId={(jitems) => jitems.id}
                                columns={columns}
                                checkboxSelection={false}
                                onCellClick={(e) => settabledata(e)}

                                paginationModel={paginationModel}
                                onPaginationModelChange={setPaginationModel}
                                pageSizeOptions={[PAGE_SIZE]}
                                slots={{
                                    pagination: CustomPagination,
                                }}
                                onRowSelectionModelChange={(e) => {


                                    setselectedcount(true)
                                }
                                }
                            />
                        </Box>
                    }


                </DataHolder>
            </div>
            <Footer />
            <ToastContainer />
        </div >
    )
}

export default ListEntries