import { createContext, useReducer } from "react";
import { reducer } from "./Reducer";
export const AdelContext = createContext("");

const initialState = {
    currentScreenSize: window.innerWidth,
    trigger: false,
    propasal_input: "",
    drawer_opened: false,
    modal_open: false,
}

const AdelContextWrapper = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <AdelContext.Provider value={{ state, dispatch }}>
        {props.children}
    </AdelContext.Provider>
}
export default AdelContextWrapper