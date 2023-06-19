import { createContext } from "react";

export const EndPointsContext = createContext([{}, () => {}]);

export const EndPointsContextProvider = ({children}) => {

    return(
        <EndPointsContextProvider>
            {children}
        </EndPointsContextProvider>
    )
}