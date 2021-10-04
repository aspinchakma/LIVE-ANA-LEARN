import React, { useState, useEffect } from 'react';
import Course from '../Course/Course';
import CircularProgress from '@mui/material/CircularProgress';

import './Home.css'
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';



const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('/Courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    const newCourseShowForHome = [];
    if (courses.length) {
        for (let i = 0; i < 6; i++) {
            const newCourse = courses[i];
            newCourseShowForHome.push(newCourse)
        }
    }
    return (
        <div className="home-container">
            <div className="banner-container">
                <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid className="main-content-container" item xs={6}>
                        <h1>Free Web Design Tutorials</h1>
                        <p>With Over 1200 Courses in 18 Subjects, You're guaranteed to find something that's right for you</p>
                        <NavLink to="/courses">VIEW OUR COURSES</NavLink>
                    </Grid>
                    <Grid item xs={6}>
                        <img src="https://ivy-school.thimpress.com/demo-3/wp-content/uploads/sites/5/2018/12/img-slider-03.png" alt="" />
                    </Grid>


                </Grid>
            </div>
            <h2>What do you want to learn today?</h2>
            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    courses.length ? newCourseShowForHome.map(course => <Course key={course.id} course={course}></Course>)
                        :
                        <CircularProgress />}

                <div className="view-all-course-button">

                    <NavLink to="/courses">VIEW ALL COURSES</NavLink>
                </div>


            </Grid>

        </div >
    );
};

export default Home;