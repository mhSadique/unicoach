import React, { useEffect, useState } from 'react';
import CourseSingle from '../CourseSingle/CourseSingle';
import './Services.css';

const Services = (props) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./COURSE_DESCRIPTION.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    console.log(courses);
    return (
        <div className="all-courses-container">
            <h1>All Our Courses</h1>
            <div className="all-courses">
                {courses.map(course => (
                    <CourseSingle course={course} key={course.id} />
                ))}
            </div>
        </div>
    );
};

export default Services;