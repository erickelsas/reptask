import { createContext, useState } from "react";

export const UserContext = createContext([{}, () => {}]);

export const UserContextProvider = ({children}) => {

    return(
        <UserContextProvider>
            {children}
        </UserContextProvider>
    )
}