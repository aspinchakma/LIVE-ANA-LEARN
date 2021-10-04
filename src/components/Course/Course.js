import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Grid, Rating } from '@mui/material';
import React from 'react';
import './Course.css';
import { faTags } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    // Accept Data 
    const { courseName, img, instructor, instructorImg, price } = props.course;
    return (
        <Grid item xs={4}>
            {/* single card  */}
            <Card className="single-card">

                <div className="content-image-container">
                    <CardMedia
                        className="content-image"

                        component="img"
                        height="194"
                        image={img}
                        alt="Paella dish"
                    />
                </div>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className="instructor-image-container">
                            <img src={instructorImg} alt="" />
                        </Avatar>
                    }

                    title={courseName}
                    subheader={instructor}
                />
                <CardContent>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>


                            <p className="total-student">Price : ${price}</p>
                        </Grid>
                        <Grid item xs={4}>
                            <p className="category"><FontAwesomeIcon icon={faTags} /> Education</p>
                        </Grid>
                        <Grid item xs={4}>
                            <p className="rating"> <Rating name="read-only" value={4} readOnly />
                            </p>
                        </Grid>


                    </Grid>

                </CardContent>


            </Card>
        </Grid>


    );
};

export default Course;