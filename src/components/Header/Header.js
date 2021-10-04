import React from 'react';
import { NavLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import './Header.css'


const Header = () => {
    return (
        <nav>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <NavLink to="/home"><h1 className="header-title">LIVE & LEARN</h1></NavLink>
                </Grid>
                <Grid className="link-container" item xs={4}>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/courses">Courses</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/about">About</NavLink>
                </Grid>
            </Grid>
        </nav>
    );
};

export default Header;