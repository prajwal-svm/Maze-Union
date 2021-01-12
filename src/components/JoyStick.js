import React from 'react'

const JoyStick = ({ handleGameStart, isGameStarted }) => {
    return (
        <div className='joystick-container'>
            {!isGameStarted && <button onClick={handleGameStart} className='btn-start'>Start Game</button>}
            {isGameStarted && <div id="joystick">
                <div className="joystick-arrow"></div>
                <div className="joystick-arrow"></div>
                <div className="joystick-arrow"></div>
                <div className="joystick-arrow"></div>
                <div id="joystick-head"></div>
            </div>}
        </div>
    )
}

export default JoyStick