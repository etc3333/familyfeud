import { useContext } from "react";
import { DataContext } from "../App.js";

import '../css/Answer.css';

export const Answer = ({ location }) => {
    const data = useContext(DataContext);
    let answer;
    let number;

    if (location === "row1-col1") {
        answer = data.answer1;
        number = data.number1;
    }
    else if (location === "row2-col1") {
      answer = data.answer2;
      number = data.number2;
    }
    else if (location === "row3-col1") {
      answer = data.answer3;
      number = data.number3;
    }
    else if (location === "row4-col1") {
      answer = data.answer4;
      number = data.number4;
    }
    else if (location === "row1-col2") {
        answer = data.answer5;
        number = data.number5;
    }
    else if (location === "row2-col2") {
        answer = data.answer6;
        number = data.number6;
    }
    else if (location === "row3-col2") {
        answer = data.answer7;
        number = data.number7;
    }
    else if (location === "row4-col2") {
        answer = data.answer8;
        number = data.number8;
    }



    return (
      <div className="element-answer">
        <div className="answer-container">
          {answer}
        </div>
        <div className="total-number">
          {number}
        </div>
      </div>
    )
  };