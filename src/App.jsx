

import {useState} from 'react'
import LoggedOut from './components/LoggedOut'
import LoggedIn from './components/LoggedIn'


function App() {

  // Hook up the functionality for the LoggedIn component to show when the loggedIn state is true
  // and the LoggedOut component to show when loggedIn state is false.
  // I will need to use the useState hook to create a state variable called loggedIn
  // and a function to change the state of loggedIn.
  // I will also need to pass the toggleLogIn function down to the button component.


  // See instruction ins toggleLogIn function

  const [loggedIn, setLoggedIn] = useState(true) // change this to false to see the logged out component

  const toggleLogIn = () => {
    // should change the state of loggedIn to whatever it's opposite is. 
    // Remember to pass this prop down to the button component, and hook it up there.
    setLoggedIn(!loggedIn) // this will toggle the loggedIn state

  }

  if(loggedIn) {
    return <LoggedIn toggleLogIn={toggleLogIn} /> // pass the toggleLogIn function down to the LoggedIn component
  }

  return <LoggedOut toggleLogIn={toggleLogIn} /> // pass the toggleLogIn function down to the LoggedOut component


}

export default App // Don't forget to export the App component
