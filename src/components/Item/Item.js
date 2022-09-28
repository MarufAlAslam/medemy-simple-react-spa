import React from 'react';
import './Item.css';

const Item = ({ title, subtitle }) => {
    return (
        <div className='item'>
            <h3>{title}</h3>
            <h4 className='muted'>{subtitle}</h4>
        </div>
    );
};

export default Item;