import React, { useEffect } from 'react';
import { useState } from 'react';
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Courses from '../Courses/Courses';
import './MainContainer.css';

const MainContainer = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('fakeData.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <div className='main-container'>
            <div className='course-holder'>
                <div className='container'>
                    <h2 className='blue bold'>
                        <FontAwesomeIcon className='me-2' icon={faBook} />
                        MEDEMY | Find Your Desired Course From Here.
                    </h2>
                    <h3>Total {courses.length} Courses Available</h3>
                    <div className='holder'>
                        {
                            courses.map(course => <Courses key={course.id} course={course}></Courses>)
                        }
                    </div>
                </div>
            </div>
            <div className='profile-holder'>
                <div className='container'>
                    <h2>profile</h2>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;