import React, { useEffect, useState } from 'react';
import CourseMainPage from '../CourseMainPage/CourseMainPage';
import SiteDescription from '../SiteDescription/SiteDescription';
import './Main.css';

const Main = (props) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./COURSE_DESCRIPTION.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);


    return (
        <main style={{backgroundColor:'ghostwhite'}}>
            <section className="description">
                <SiteDescription />
            </section>
            <div className="course-description-title">
                <h2>Our Exclusive Courses</h2>
            </div>
            <section className="courses">
                {courses.map(course => (
                    (course.id < 7) ? <CourseMainPage course={course} key={course.id} /> : ''
                ))}
            </section>
        </main>
    );
};

export default Main;