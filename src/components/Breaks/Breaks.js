import React from 'react';
import { ToastContainer } from 'react-toastify';
import './Breaks.css'

const Breaks = ({ time, breakClickHandler }) => {
    return (
        <button className='btn-break' onClick={() => {
            breakClickHandler(time);
        }}>
            {time}m
            <ToastContainer />
        </button >
    );
};

export default Breaks;