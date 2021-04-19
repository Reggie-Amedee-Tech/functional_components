import React, { useState } from 'react';
import PersonCard from './PersonCard';

const BattlePosition = props => {
    const [state, setState] = useState({
        battlePosition: "offensive"
    })

    const assumePosition = () => {
        if (state.battlePosition === "offensive") {
            setState({battlePosition: "defensive"})
        } else {
            setState({battlePosition: "offensive"})
        }
    }

    return(
        <div>
            <button onClick={assumePosition}>Change Position</button>
            <p>assumes a {state.battlePosition} position!</p>
        </div>
    )
}

export default BattlePosition;