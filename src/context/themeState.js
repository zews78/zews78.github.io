import { useState } from "react";
import Navbar from "../components/navbar/navbar";
import themeContext from "./themeContext";

const ThemeState=(props)=>{
    const [mode, setmode] = useState("light");
    
    // const theme = ""
    return(
        <themeContext.Provider value={{mode,setmode}}>
            {props.children}
        </themeContext.Provider>
    )
}

export default ThemeState;

