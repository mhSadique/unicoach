import React from 'react';
import './MentorSingle.css';

const MentorSingle = ({mentor}) => {
    const { fullName: name, image, email } = mentor;
    return (
        <div className='mentor'>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{email}</p>
            <button>Make A Contact</button>
        </div>
    );
};

export default MentorSingle;