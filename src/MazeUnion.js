import React, { useState, useEffect, useRef } from 'react'
import { minmax } from "./helpers/Maths"

import Notes from './components/Notes';

const MazeUnion = () => {

  const [gameInProgress, setGameInProgress] = useState(null)
  const [mouseStartX, setMouseStartX] = useState(null)
  const [mouseStartY, setMouseStartY] = useState(null)
  const [accelerationX, setAccelerationX] = useState(null)
  const [accelerationY, setAccelerationY] = useState(null)
  const [frictionX, setFrictionX] = useState(null)
  const [frictionY, setFrictionY] = useState(null)

  const joystickHeadRef = useRef(null)
  const mazeWindowRef = useRef(null)

  const captureEvent = e => {
    const mouseDeltaX = -minmax(mouseStartX - e.clientX, 30);
    const mouseDeltaY = -minmax(mouseStartY - e.clientY, 30);

    if (joystickHeadRef.current) {
      joystickHeadRef.current.style.cssText = `
          left: ${mouseDeltaX}px;
          top: ${mouseDeltaY}px;
          animation: none;
          cursor: grabbing;
        `;
    }

    const rotationY = mouseDeltaX;
    const rotationX = mouseDeltaY;

    if (mazeWindowRef.current) {
      mazeWindowRef.current.style.cssText = `
          transform: rotateY(${rotationY}deg) rotateX(${-rotationX}deg)
        `;
    }

    const gravity = 2;
    const frictionCoefficient = 0.01;

    setAccelerationX(gravity * Math.sin((rotationY / 180) * Math.PI));
    setAccelerationY(gravity * Math.sin((rotationX / 180) * Math.PI));
    setFrictionX(gravity * Math.cos((rotationY / 180) * Math.PI) * frictionCoefficient);
    setFrictionY(gravity * Math.cos((rotationX / 180) * Math.PI) * frictionCoefficient);
  }

  useEffect(() => {
    if (gameInProgress) {
      window.addEventListener('mousemove', captureEvent);
    }
    return () => window.removeEventListener('mousemove', captureEvent)
  }, [gameInProgress])

  const handleGameStart = (e) => {
    setMouseStartX(e.clientX)
    setMouseStartY(e.clientY)
    setGameInProgress(true)
  }

  return (
    <div className="maze-union">

      <div ref={mazeWindowRef} className='window'>
        <div className="titlebar">
          <div className="window-btns">
            <span className="btns close" />
            <span className="btns minimize" />
            <span className="btns zoom" />
          </div>
          <span className='window-title'>Maze Union</span>
        </div>

        <div id="maze">
          <div id="end"></div>
        </div>

      </div>

      <div className='flex'>
        <div className='joystick-container'>
          {!gameInProgress && <button onClick={handleGameStart} className='btn-start'>Start Game</button>}
          {gameInProgress && <div id="joystick">
            <div className="joystick-arrow"></div>
            <div className="joystick-arrow"></div>
            <div className="joystick-arrow"></div>
            <div className="joystick-arrow"></div>
            <div ref={joystickHeadRef} id="joystick-head"></div>
          </div>}
        </div>
        <Notes isGameStarted={gameInProgress} />
      </div>
    </div>
  );
}

export default MazeUnion;
