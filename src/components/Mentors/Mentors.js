import React, { useEffect, useState } from 'react';
import './Mentors.css';
import MentorSingle from '../MentorSingle/MentorSingle';

const Mentors = () => {
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        fetch('./MENTORS.json')
        .then(res => res.json())
        .then(data => setMentors(data));
    }, []);
    return (
        <div className='mentorship'>
            <h1>All Our Mentors</h1>
            <div className='mentors-container'>                         
            {mentors.map(mentor => <MentorSingle mentor={mentor} key={mentor.id} /> )}
        </div>
        </div>
    );
};

export default Mentors;