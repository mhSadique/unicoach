import React from 'react';
import './CourseSingle.css';

const CourseSingle = ({ course }) => {
    const { courseObjective, courseDuration, courseFee, courseTitle, image, mentor } = course;
    return (
        <div className='course-single'>
            <img src={image} alt="" />
            <h2>{courseTitle}</h2>
            <p><b>Course Objective: </b>{courseObjective}</p>
            <h4>Mentor: {mentor}</h4>
            <h4>Course Duration: {courseDuration} hrs</h4>
            <h5>Course Fee: ${courseFee}</h5>
            <button>Enroll in this course</button>
        </div>
    );
};

export default CourseSingle;