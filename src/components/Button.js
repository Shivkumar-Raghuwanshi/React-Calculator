import { useContext } from "react"
import { CalcContext } from "./CalcContext"

function getStyleName(btn) {
    const className = {
        "=": "equals",
        "*": "opt",
        "-": "opt",
        "+": "opt",
        "/": "opt",
    }
    return className[btn]
}


function Button({ value }) {

    const { Calc, setCalc } = useContext(CalcContext);

    // User Click on DotComma
    const dotClick = () => {
        setCalc({
            ...Calc,
            num: !Calc.num.toString().includes(".") ? Calc.num + value : Calc.num
        });

    }

    // User Click AC

    const resetClick = () => {
        setCalc({
            sign: "",
            num: 0,
            res: 0
        })
    }
    // User Click Number
    const handleClickButton = () => {
        const numberString = value.toString()
        let numberValue;
        if (numberValue === "0" && Calc.num === 0) {
            numberValue = "0"
        } else {
            numberValue = Number(Calc.num + numberString)

        }
        setCalc({
            ...Calc,
            num: numberValue
        })
    }
    // User Click Operation
    const signClick = () => {
        setCalc({
            sign: value,
            res: !Calc.res && Calc.num ? Calc.num : Calc.res,
            num: 0
        })
    }
    // User Click equals
    const equalsClick = () => {
        if (Calc.res && Calc.num) {
            const math = (a, b, sign) => {
                const result = {
                    "+": (a, b) => a + b,
                    "-": (a, b) => a - b,
                    "*": (a, b) => a * b,
                    "/": (a, b) => a / b,
                }
                return result[sign](a, b)
            }
            setCalc({
                res: math(Calc.res, Calc.num, Calc.sign),
                sign: "",
                num: 0
            })
        }

    }
// User PercentClick
const percentClick = ()=>{
    setCalc({
        num:(Calc.num/100),
        res:(Calc.res/100),
        sign: ""
    })
}
// User Click Invert Button
const invertClick=()=>{
    setCalc({
        num:Calc.num? Calc.num * -1:0,
        res:Calc.res? Calc.res * -1:0,
        sign:""
    })
}
    const handleBtnClick = () => {
        const results = {
            ".": dotClick,
            "AC": resetClick,
            "/": signClick,
            "*": signClick,
            "-": signClick,
            "+": signClick,
            "=": equalsClick,
            "%": percentClick,
            "+/-":invertClick
        }
        if (results[value]) {
            return results[value]()
        } else {
            return handleClickButton()
        }
    }

    return (
        <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
    );
}

export default Button;

