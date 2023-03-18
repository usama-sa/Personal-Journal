import React from 'react'
import AuthenticationHeader from '../Components/AuthenticationHeader.js/AuthenticationHeader'
import Footer from '../Components/Footer/Footer'
import { MainContainer } from '../styles/JournalEntryMain'
import JournalCover from './JournalCover/JournalCover'
import EntryHeader from '../Components/EntryHeader'
import JournalEntryMain from '../Components/JournalEntryMain'

const JEmain = () => {
    return (
        <>
            <EntryHeader />
            <JournalEntryMain />
            <Footer />
            </>
    )
}

export default JEmain
