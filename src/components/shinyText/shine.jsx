import React from 'react';
import './shine.css';

const ShineText = ({ text }) => {
    console.log('ShineText', text);
    return (
        <button className="btn-shine">{text}</button>

    );
};

export default ShineText;