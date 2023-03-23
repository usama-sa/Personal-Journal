import axios from 'axios'

// const URL = 'http://192.168.100.3:5001/'
const URL = "https://apis.ottosjournal.com/"

const getData = async () => {
    try {
        const value = localStorage.getItem('@storage_Key')
        if (value !== null) {
            // value previously stored
            return value
        }
    } catch (e) {
        // error reading value
        console.log(e, "error")
    }
}




export async function JournalsList() {
    return getData().then(async e => {
        let config = {
            headers: {
                "Authorization": `Bearer ${e}`,
            }
        }
        let response = await axios.get(URL + 'journals', config)
        console.log(response.data)
        try {
            return response.data
        } catch (e) {
        }
        return response.data
    })

}

export async function EntriesList() {
    return getData().then(async e => {
        let config = {
            headers: {
                "Authorization": `Bearer ${e}`,
            }
        }
        let response = await axios.get(URL + 'entries', config)
        console.log(response.data)
        try {
            return response.data
        } catch (e) {
        }
        return response.data
    })

}


export async function AddEntry(info) {
    return getData().then(async s => {
        const config = {
            headers: { Authorization: `Bearer ${s}` }
        }
        const response = await axios.post(URL + 'users', {
            name: info.name,
            email: info.email,
            routein: info.routein,
            routeout: info.routeout,
            timein: info.timein,
            timeout: info.timeout
        })
        try {
            // await localStorage.setItem('@storage_Key', response.data.token)
            return response.data
        } catch (e) {
            return e.response.data
        }
    })
}

export async function LockJournal(id, password) {

    return getData().then(async s => {
        const config = {
            headers: { Authorization: `Bearer ${s}` }
        }
        const response = await axios.post(URL + 'journals/lock-journal/' + id, {
            "password": password
        }, config)
        try {
            // await localStorage.setItem('@storage_Key', response.data.token)
            return response.data
        } catch (e) {
            return e.response.data
        }
    })

}

export async function UnLockJournal(id, password) {

    return getData().then(async s => {
        const config = {
            headers: { Authorization: `Bearer ${s}` }
        }
        const response = await axios.post(URL + 'journals/unlock-journal/' + id, {
            "password": password
        }, config)
        try {
            // await localStorage.setItem('@storage_Key', response.data.token)
            return response.data
        } catch (e) {
            return e.response.data
        }
    })

}


export async function AddJournalEntry(jid, title, description, quote, state) {

    return getData().then(async s => {
        const config = {
            headers: { Authorization: `Bearer ${s}` }
        }
        const response = await axios.post(URL + 'entries/post-entry',
            {
                "entrytitle": title,
                "journal_id": jid,
                "entrydescription": description,
                "isActive": state,
                "isFavourite": 0,
                "quoteText": quote
            }, config)
        try {
            // await localStorage.setItem('@storage_Key', response.data.token)
            return response.data
        } catch (e) {
            return e.response.data
        }
    })

}



export async function AddJournalEntryDraft(id, title, description) {

    return getData().then(async s => {
        const config = {
            headers: { Authorization: `Bearer ${s}` }
        }
        const response = await axios.post(URL + 'entries/post-entry/' + id,
            {
                "entrytitle": title,
                "entrydescription": description,
            }, config)
        try {
            // await localStorage.setItem('@storage_Key', response.data.token)
            return response.data
        } catch (e) {
            return e.response.data
        }
    })

}


export async function LoginUser(email, password) {
    return getData().then(async s => {
        const response = await axios.post(URL + 'auth/login',
            {
                "email": email,
                "password": password,
            })
        try {
            return response.data

        } catch (e) {
            return e.response.data
        }
    })
}


export async function RegisterUser(firstname, lastname, email, password) {
    return getData().then(async s => {
        const response = await axios.post(URL + 'auth',
            {
                "first_name": firstname,
                "last_name": lastname,
                "email": email,
                "password": password,
            })
        try {
            return response.data
        } catch (e) {
            return e.response.data
        }
    })
}

export async function ForgetPassword(email) {
    const response = await axios.post(URL + 'reset',
        {
            "email_id": email
        })
    try {
        return response.data
    } catch (e) {
        return e.response.data
    }
}

export async function GetHashedUser(hash) {
    const response = await axios.get(URL + 'reset/' + hash)
    try {
        return response.data
    } catch (e) {
        return e.response.data
    }

}


export async function UpdateUserPassword(email, password) {
    const response = await axios.put(URL + 'auth/update/' + email, {
        password: password
    })
    try {
        return response.data
    } catch (e) {
        return e.response.data
    }

}

export async function CreateFirstJournal(id, title, type) {
    console.log(id, title)
    return getData().then(async s => {
        const config = {
            headers: { Authorization: `Bearer ${s}` }
        }
        const response = await axios.post(URL + 'journals/post-journal',
            {
                "user_id": id,
                "journaltitle": title,
                "journaltype": type,
                "isLocked": 0,
                "password": ""
            }, config)
        try {
            // await localStorage.setItem('@storage_Key', response.data.token)
            return response.data
        } catch (e) {
            return e.response.data
        }
    })

}

export async function EditJournal(id, title) {
    console.log(id, title)
    return getData().then(async s => {
        const config = {
            headers: { Authorization: `Bearer ${s}` }
        }
        const response = await axios.post(URL + 'journals/update-journal/' + id,
            {
                "journaltitle": title,

            }, config)
        try {
            // await localStorage.setItem('@storage_Key', response.data.token)
            return response.data
        } catch (e) {
            return e.response.data
        }
    })

}

export async function ActiveJournal(id) {
    return getData().then(async s => {
        const config = {
            headers: { Authorization: `Bearer ${s}` }
        }
        const response = await axios.post(URL + 'entries/post-entry/update/' + id,
            {
                "": ''

            }, config)
        try {
            // await localStorage.setItem('@storage_Key', response.data.token)
            return response.data
        } catch (e) {
            return e.response.data
        }
    })

}

export async function AddFavourites(id) {
    return getData().then(async s => {
        const config = {
            headers: { Authorization: `Bearer ${s}` }
        }
        const response = await axios.post(URL + 'entries/post-entry/favourite/' + id,
            {
                "": " "

            }, config)
        try {
            // await localStorage.setItem('@storage_Key', response.data.token)
            console.log(response.data)
            return response.data
        } catch (e) {
            return e.response.data
        }
    })

}

export async function DeleteEntry(id) {
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "X-RapidAPI-Key": "0cb61e2826msh031b587a300f448p12ff88jsna372dc1d4dbb",
        "X-RapidAPI-Host": "trueway-matrix.p.rapidapi.com",
        "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
        "": ""
    });

    let reqOptions = {
        url: "http://72.167.44.113:5001/entries/delete-entry/" + id,
        method: "DELETE",
        headers: headersList,
        data: bodyContent,
    }

    let response = await axios.request(reqOptions);
    return (response.data);

}


export async function AddQuotes(id, quote) {
    return getData().then(async s => {
        const config = {
            headers: { Authorization: `Bearer ${s}` }
        }
        const response = await axios.post(URL + 'entries/post-entry/quotations/' + id,
            {
                "quoteText": quote

            }, config)
        try {
            // await localStorage.setItem('@storage_Key', response.data.token)
            return (response.data)
        }
        catch (e) {
            return e.response.data
        }
    })
}


export async function ContactSupport(email, subject, body) {

    return getData().then(async s => {
        const response = await axios.post(URL + 'support', {
            "email": email,
            "subject": subject,
            "body": body
        })
        try {
            // await localStorage.setItem('@storage_Key', response.data.token)
            return response.data
        } catch (e) {
            return e.response.data
        }
    })

}