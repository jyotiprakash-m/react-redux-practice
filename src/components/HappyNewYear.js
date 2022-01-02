import React, { useState } from 'react'

function HappyNewYear(props) {
    const [isDisplay, setIsDisplay] = useState(true)

    return (
        <div className='advertisement' style={{ display: isDisplay === true ? "absolute" : "none" }}>
            <button className='crossButton' onClick={() => { setIsDisplay(false); }}>x</button>
            <a href='https://github.com/jyotiprakash-m/react-redux-practice' style={{ zIndex: 30000, borderWidth: 2, borderColor: "red", padding: "5px", borderRadius: '5px' }} className='sourceBtn'>Source File</a>
            <img className='ballon' src='https://www.greetingseveryday.com/wp-content/uploads/2016/12/Happy-New-Year-GIF-For-Hike.gif' alt='Happy new year' />
            <div className='container'>
                <img src='https://i.pinimg.com/originals/0b/12/6e/0b126ebee7d68ca78ded0e5c0100a73d.jpg' alt='Time is very short' />
            </div>

        </div>
    )
}

export default HappyNewYear
