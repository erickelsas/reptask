import { createContext, useState } from "react";

export const AuctionContext = createContext([{}, () => {}]);

export const AuctionContextProvider = ({children}) => {

    return(
        <AuctionContextProvider>
            {children}
        </AuctionContextProvider>
    )
}