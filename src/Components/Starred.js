import React, { useState, useEffect } from 'react'
import { MainContainer } from '../styles/JournalEntryMain'
import EntryHeader from './EntryHeader'
import AuthenticationHeader from './AuthenticationHeader.js/AuthenticationHeader'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function createData(id, title, detail) {
    return { id, title, detail };
}
const id = 1

const rows = [

];
const Starred = () => {
    const [datalist, setdatalist] = useState([])
    console.log("datalistcheckkaro", typeof (datalist))


    React.useEffect(() => {
        const a = localStorage.getItem("favourite")
        console.log("aa", a)
        setdatalist(JSON.parse(a))

    }, [])
    return (
        <MainContainer>
            <AuthenticationHeader />
            <div style={{ backgroundColor: "lightgrey", display: "flex", justifyContent: "center", alignItems: "center", flex: 2, flexDirection: "column" }}>

                <p style={{ color: "black", fontSize: 30, fontWeight: "700" }}>JOHN'S JOURNAL</p>

            </div>
            {
                // datalist.map((data) => {
                //     return (
                //         <p>{data.details}</p>)
                // })
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell align="right">title</TableCell>
                                <TableCell align="right">detail&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {datalist.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    {/* <TableCell align="right">{id+1}</TableCell> */}
                                    <TableCell align="right">{row.title}</TableCell>
                                    <TableCell align="right">Available in pro version</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }

        </MainContainer>
    )
}

export default Starred
