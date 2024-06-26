import { useContext } from "react";
import { DataContext } from "../App.js";

import '../css/Question.css';

export const Question = () => {
  const data = useContext(DataContext);
  return (
    <div className="current-question">
      <h2>
          {data.question}
      </h2>
    </div>
  )
};