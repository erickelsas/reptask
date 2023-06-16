import { createContext, useState } from "react";

export const AuthContext = createContext([false, () => {}]);

export const AuthContextProvider = ({children}) => {

    return(
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    )
}