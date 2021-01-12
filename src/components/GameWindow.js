import React from 'react'

const GameWindow = () => {
    return (
        <div className='window'>
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
    )
}

export default GameWindow