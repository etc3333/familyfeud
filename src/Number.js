import { useContext } from "react";
import { DataContext } from "./App.js";

export const Number = ({ location }) => {
    const data = useContext(DataContext);
    let number;
    
    if (location === "row1-col1") {
        number = data.answer1 == null ? null : 1;
    }
    else if (location === "row2-col1") {
        number = data.answer2 == null ? null : 2;
    }
    else if (location === "row3-col1") {
        number = data.answer3 == null ? null : 3;
    }
    else if (location === "row4-col1") {
        number = data.answer4 == null ? null : 4;
    }
    else if (location === "row1-col2") {
        number = data.answer5 == null ? null : 5;
    }
    else if (location === "row2-col2") {
        number = data.answer6 == null ? null : 6;
    }
    else if (location === "row3-col2") {
        number = data.answer7 == null ? null : 7;
    }
    else if (location === "row4-col2") {
        number = data.answer8 == null ? null : 8;
    }
    return (
        <div className="element">
            <div>
                {number}
            </div>
        </div>
    )
};