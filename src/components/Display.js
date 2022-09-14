import { Number } from './Number.js';
import { Answer } from './Answer.js';
import { useContext, useEffect, useState } from 'react';

import { DataContext } from "../App.js";

export const Display = ({ location }) => {
    const [setter, setSetter] = useState(false);
    const data = useContext(DataContext);

    useEffect(() => {
        setSetter(false);
    },[data]);
    
    const test = () => {
        setSetter(!setter);
    };

    return (
        <div onClick={() => test()}>
            {setter ? <Answer location={location} /> : <Number location={location} />}
        </div>
    )
};