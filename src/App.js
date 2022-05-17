import React, {useState } from 'react'
import { AppRouter } from './components/NavBar/AppRouter';
import { UserContext } from './components/UserContext/UserContext';


export const App = () => {
    const [user, setUser] = useState({});
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            <AppRouter></AppRouter>
        </UserContext.Provider>

    )
}
