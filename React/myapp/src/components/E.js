import { UserContext, EmailContext } from "./App"
import { useContext } from 'react'

let E =() => {

    let name = useContext(UserContext)
    let email = useContext(EmailContext)
    return (
        <>
        <h1>I am Component E, and i am {name}, and email is {email}</h1>

        </>
    )
}

export default E 