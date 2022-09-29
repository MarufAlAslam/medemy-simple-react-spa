import React from 'react';
import { ToastContainer } from 'react-toastify';
import './Courses.css';

const Courses = (props) => {
    // console.log(props)
    return (
        <div className='courses'>
            <img src={props.course.img} alt="{props.course.name}" />
            <h3 className='bold mb-1'>{props.course.name}</h3>
            <p className='course-details mb-1'>
                {props.course.details.slice(0, 100)}...
            </p>
            <p className='mb-1'>
                <span className='bold'>For Age: </span> {props.course.forAge}
            </p>
            <p className='mb-1'>
                <span className='bold'>Time Duration: </span> {parseInt(props.course.timeRequired / 60)}h {props.course.timeRequired % 60}m
            </p>
            <button className='btn-add' onClick={() => { props.addToListHandler(props.course.timeRequired) }}>
                Add To List
            </button>
            <ToastContainer />
        </div>
    );
};

export default Courses;