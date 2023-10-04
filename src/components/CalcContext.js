import { createContext, useState } from "react";

export const CalcContext = createContext()
function CalcProvider({ children }) {
    const [Calc, setCalc] = useState({
        sing: "",
        num: 0,
        res: 0,
    });

    const providerValue = {
        Calc, setCalc
    }

    return (
        <CalcContext.Provider value={providerValue}>
            {children}
        </CalcContext.Provider>
    );
}



export default CalcProvider;