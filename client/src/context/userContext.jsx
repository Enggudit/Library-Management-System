import React from 'react'
import { createContext, useState } from 'react'

export const UserContext = createContext()

const userContext = ({children}) => {

    const [user, setUser] = useState({
        email: '',
        fullName:{
            firstname:'',
            lastname:''
        }
    })
  return (
    <div>
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    </div>
  )
}

export default userContext
