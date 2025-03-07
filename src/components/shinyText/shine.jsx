import React from 'react';
import './shine.css';

const ShineText = ({ text }) => {
    console.log('ShineText', text);
    return (
        <a className="btn-shine">{text}</a>

    );
};

export default ShineText;