


const Button = ({toggleLogIn}) => { // destructured toggleLogIn from props

    const handleClick = ({toggleLogIn}) => { // created a handleClick function
        // run the toggleLogIn Prop function that hs been passed down from App.jsx
        // this will change the state of loggedIn in App.jsx
        toggleLogIn()
    }

    return (
        //create a button and a handle click call back function
        <button onClick={handleClick}>Log In</button>

    )

}


export default Button