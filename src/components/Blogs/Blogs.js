import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css';

import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('/Blogs.JSON')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="blog-container">
            <h2>READ OUR BLOGS</h2>
            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                {
                    blogs.length ? blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                        : <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                            <LinearProgress color="secondary" />
                        </Stack>
                }



            </Grid>
        </div>
    );
};

export default Blogs;