import React from 'react';
import './MentorSingle.css';

const MentorSingle = ({mentor}) => {
    const { fullName: name, image } = mentor;
    return (
        <div className='mentor'>
            <img src={image} alt={name} />
            <h2><b>Name:</b> {name}</h2>
            <button>Know More</button>
        </div>
    );
};

export default MentorSingle;