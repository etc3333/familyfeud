import { createContext, useState } from 'react';
import { Question } from './components/Question.js';
import { Display } from './components/Display.js';
import questions7 from './FamilyFeudQuestions/questions7.json';
import questions6 from './FamilyFeudQuestions/questions6.json';
import questions5 from './FamilyFeudQuestions/questions5.json';
import questions4 from './FamilyFeudQuestions/questions4.json';
import questions3 from './FamilyFeudQuestions/questions3.json';

import './App.css';

export const DataContext = createContext();

function App() {
  const [currentData, setCurrentData] = useState(questions7[getRndInteger(0,739)]);

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  const reRoll = () => {
    const choices = [questions3, questions4, questions5, questions6, questions7];
    let temp = choices[getRndInteger(0,4)];
    setCurrentData(temp[getRndInteger(0, temp.length)]);
  };

  return (
    <DataContext.Provider value={currentData}>
      <div className="container-flex">
        <div className="title">
          <h1>Family Feud Quick Version</h1>
        </div>
          <Question data={currentData}/>
        <div className="container-grid">
          <Display location="row1-col1" />
          <Display location="row1-col2" />
          <Display location="row2-col1" />
          <Display location="row2-col2" />
          <Display location="row3-col1" />
          <Display location="row3-col2" />
          <Display location="row4-col1" />
          <Display location="row4-col2" />
        </div>
        <div>
          <button className='Reroll' onClick={() => reRoll()}>Reroll</button>
        </div>
      </div>
    </DataContext.Provider>

  );
}

export default App;
