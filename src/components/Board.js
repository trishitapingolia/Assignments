import React from 'react'
import Buttons from './Buttons'

const Board = () => {
    return (
        <div className='cal d-flex flex-column justify-content-center align-items-center bg-white' style={{ width: "300px", height: "480px", borderRadius: "10px" }}>
                <textarea className=' text-white text-end pt-5 pe-2 rounded-3 ' style={{ width: "250px", height: "100px", fontSize: "40px", backgroundColor: "gray", overflow:"hidden", resize:"none", cursor:"default" }}>
                    
                </textarea>
                <div>
                    <Buttons op={'AC'} />
                    <Buttons op={'/'} />
                    <Buttons op={'%'} />
                    <Buttons op={<i class="fa-solid fa-delete-left"></i>} />
                </div>
                <div>
                    <Buttons op={7} />
                    <Buttons op={8} />
                    <Buttons op={9} />
                    <Buttons op={'+'} />
                </div>
                <div>
                    <Buttons op={4} />
                    <Buttons op={5} />
                    <Buttons op={6} />
                    <Buttons op={'-'} />
                </div>
                <div>
                    <Buttons op={1} />
                    <Buttons op={2} />
                    <Buttons op={3} />
                    <Buttons op={'x'} />
                </div>
                <div>
                    <Buttons op={'0'} />
                    <Buttons op={'.'} />
                    <Buttons op={'='} />
                    <Buttons op={<i class="fa-solid fa-clock-rotate-left"></i>} />
                </div>
        </div>
    )
}

export default Board