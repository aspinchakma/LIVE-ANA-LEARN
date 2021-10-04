import React, { useState, useEffect } from 'react';
import './Courses.css';
import Course from '../Course/Course';
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    // Recieve Data 
    useEffect(() => {
        fetch('/Courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="mini-course-container">
            <h2>ALL COURSES</h2>
            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {courses.length ? courses.map(course => <Course key={course.id} course={course}></Course>)
                    :
                    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                        <LinearProgress color="secondary" />
                    </Stack>
                }



            </Grid>
        </div>
    );
};

export default Courses;