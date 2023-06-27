import { createContext, useState } from "react";

export const RepContext = createContext([{}, () => {}]);

export const RepContextProvider = ({children}) => {

    return(
        <RepContextProvider>
            {children}
        </RepContextProvider>
    )
}