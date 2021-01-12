import React from 'react'

const Notes = ({ isGameStarted }) => {
    return (
        <div id="note">
            {!isGameStarted && <h4> Click the Start Button to start the game!</h4>}
            {isGameStarted && <h4> Game Started!</h4>}
            <p className="goal">Goal: Move every ball to the center to win the game.</p>
        </div>
    )
}

export default Notes