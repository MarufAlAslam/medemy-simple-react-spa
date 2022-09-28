import React from 'react';
import './Breaks.css'

const Breaks = ({ time, breakClickHandler }) => {
    return (
        <button className='btn-break' onClick={() => { breakClickHandler(time) }}>
            {time}m
        </button >
    );
};

export default Breaks;