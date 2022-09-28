import React, { useEffect } from 'react';
import { useState } from 'react';
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Courses from '../Courses/Courses';
import './MainContainer.css';
import StaticUserInfo from '../StaticUserInfo/StaticUserInfo';
import Breaks from '../Breaks/Breaks';

const MainContainer = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('fakeData.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    // const [activeState, setActiveState] = useState(false);

    const [timeBreak, setTimeBreak] = useState(0);

    const breakClickHandler = (breakTime) => {
        setTimeBreak(breakTime);
    }

    const addToListHandler = (duration) => {
        console.log(duration);
    }
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
                            courses.map(course => <Courses key={course.id} course={course} addToListHandler={addToListHandler}></Courses>)
                        }
                    </div>
                </div>
            </div>
            <div className='profile-holder'>
                <div className='container'>
                    <StaticUserInfo></StaticUserInfo>
                    <hr />
                    <div className='break'>
                        <h3 className='mb-2'>Add A Break</h3>
                        <div className='break-btns'>
                            <Breaks time={10} breakClickHandler={breakClickHandler}></Breaks>
                            <Breaks time={20} breakClickHandler={breakClickHandler}></Breaks>
                            <Breaks time={30} breakClickHandler={breakClickHandler}></Breaks>
                            <Breaks time={45} breakClickHandler={breakClickHandler}></Breaks>
                        </div>
                    </div>
                    <hr />
                    <div className='course-details'>
                        <h3 className='mb-2'>Course Details</h3>
                        <div className='course-details-holder'>
                            <div className='course-details-item'>
                                <p>
                                    Course Time:
                                </p>
                                <p className='muted' id='courseTime'>
                                    0
                                </p>
                            </div>
                            <div className='course-details-item'>
                                <p>
                                    Break Time:
                                </p>
                                <p className='muted' id='breakTime'>
                                    {timeBreak}m
                                </p>
                            </div>
                        </div>
                    </div>

                    <button className='btn-add'>
                        Activity Completed
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;