



import React from 'react'
import Button from './Button'

const LoggedOut = ({toggleLogIn}) => { // destructured toggleLogIn from props
    const handleClick = () => { // created a handleClick function
        toggleLogIn()
    }
    //the handleclick function will run the toggleLogIn function that was passed down from App.jsx
    //the handleclick function needs to be passed down to the loggedout and logged in component
    




    return (
        <>
            <h1>Logged out comp...</h1>
            <Button toggleLogIn={toggleLogIn} />
        </>
    )
}

export default LoggedOut
