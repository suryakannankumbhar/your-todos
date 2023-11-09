import React from 'react';
import art1 from './art1.svg';
import art2 from './art2.svg';
import art3 from './art3.svg';
import './flexboxWithImages.css';
import { useNavigate } from 'react-router-dom';

function FlexboxWithImages() {
    const navigate = useNavigate();
    return (
        <div className='flex-container'>
            <div
                className='flex-item'
                onClick={() => {
                    navigate('/food');
                }}
            >
                <img src={art1} alt='' />
                <h1>Food</h1>
            </div>
            <div
                className='flex-item'
                onClick={() => {
                    navigate('/sports');
                }}
            >
                <img src={art2} alt='' />
                <h1>Sports</h1>
            </div>
            <div
                className='flex-item'
                onClick={() => {
                    navigate('/mindful');
                }}
            >
                <img src={art3} alt='' />
                <h1>Mental Health</h1>
            </div>
        </div>
    );
}

export default FlexboxWithImages;
