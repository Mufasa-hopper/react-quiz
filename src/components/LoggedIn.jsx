



import React from 'react'
import Button from './Button'

const LoggedIn = ({toggleLogIn}) => { // destructured toggleLogIn from props
    const handleClick = () => { // created a handleClick function
        toggleLogIn() 
    }


    return (
        //below is a fragment that allows us to return multiple elements
        <>
            <h1>Logged in</h1>
            <Button toggleLogIn={toggleLogIn} />
        </>
    )
}

export default LoggedIn