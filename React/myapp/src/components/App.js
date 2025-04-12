import React from 'react'
import C from "./c"

export let UserContext = React.createContext()
export let EmailContext = React.createContext()

let App = () => {

    let username = "Sachin"
    let email = "sachin@gmail.com"
    return (
        <>
            <EmailContext.Provider value={email}>
                <UserContext.Provider value={username}>
                    <C />

                </UserContext.Provider>
            </EmailContext.Provider>
        </>
    )
}

export default App