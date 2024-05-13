import { useState } from "react";

import '../css/Scores.css';

const Scores = () => {

  const [inputs, setInputs] = useState({
    team1Name: 'Team 1',
    team1Score: '0',
    team2Name: 'Team 2',
    team2Score: '0'
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  return (
    <div id="scores-row">
      <div className='score-table'>
        <input type="text" className="scoreTeam-name" name="team1Name" value={inputs.team1Name || ''} onChange={handleChange} />
        <input type="text" className="scoreTeam-score" name="team1Score" value={inputs.team1Score || ''} onChange={handleChange} />
      </div>
      <div className='score-table'>
        <input type="text" className="scoreTeam-name" name="team2Name" value={inputs.team2Name || ''} onChange={handleChange} />
        <input type="text" className="scoreTeam-score" name="team2Score" value={inputs.team2Score || ''} onChange={handleChange} />
      </div>
    </div>
  )
};

export default Scores;