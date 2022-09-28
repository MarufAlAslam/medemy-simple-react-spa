import React from 'react';
import './Breaks.css'

const Breaks = ({ time, breakClickHandler }) => {
    return (
        <button className='btn-break' onClick={() => { console.log("clicked") }}>
            {time}m
        </button>
    );
};

export default Breaks;