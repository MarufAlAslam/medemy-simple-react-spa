import React from 'react';
import './StaticUserInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Item from '../Item/Item';

const StaticUserInfo = () => {
    return (
        <div>
            <div className='user mb-3'>
                <img src='https://marufalaslam.github.io/test/maruf.jpg' alt=''></img>
                <div className='userDetails'>
                    <h3 className='bold'>Maruf Al Aslam</h3>
                    <p className='muted fs-13'>
                        <FontAwesomeIcon className='me-2' icon={faMapMarkerAlt} /> Barishal, Bangladesh
                    </p>
                </div>
            </div>

            <div className='user-details-card'>
                <Item title={"Age"} subtitle={"24y"}></Item>
                <Item title={"Gender"} subtitle={"Male"}></Item>
                <Item title={"Courses"} subtitle={10}></Item>
            </div>
        </div>
    );
};

export default StaticUserInfo;