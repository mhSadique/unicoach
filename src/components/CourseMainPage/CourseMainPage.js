import React from 'react';
import './CourseMainPage.css';

const CourseMainPage = ({ course }) => {
    return (
        <div className="card course-card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={course.image} alt="" />
            <div className="card-body">
                <h5 className="card-title">{course.courseTitle}</h5>
                <p className="card-text">{course.courseObjective}</p>
                <h5 className="card-title">Course Fee: ${course.courseFee}</h5>
                <a style={{backgroundColor: 'rgba(45, 74, 110, 1)', marginTop: '10px'}} href="{course.id}" className="btn btn-primary">Enroll in this course</a>
            </div>
        </div>
    );
};

export default CourseMainPage;