import { useContext } from "react";
import { CalcContext } from "./CalcContext";

function Screen() {
    const {Calc} = useContext(CalcContext);
    return (
        <div className="screen" max={12} mode="single">{Calc.num? Calc.num:Calc.res}</div>
    );
}

export default Screen;