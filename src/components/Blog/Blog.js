import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardContent, CardHeader, CardMedia, Grid, Avatar, Typography, Rating } from '@mui/material';
import React from 'react';
import { faTags, faEye } from '@fortawesome/free-solid-svg-icons';
import './Blog.css'

const Blog = (props) => {

    // desturcturing props 
    const { title, author, img, authorImg, description, view } = props.blog;
    return (
        <Grid item xs={4}>
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
                            <img src={authorImg} alt="" />
                        </Avatar>
                    }

                    title={title}
                    subheader={author}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>


                            <p className="total-view"><FontAwesomeIcon icon={faEye} /> {view}</p>
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

export default Blog;