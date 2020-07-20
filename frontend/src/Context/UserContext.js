import React, {useState} from 'react';



const UserContext = React.createContext(true)


// const [state, setstate] = useState("")

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export default UserContext