import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import imgLink from '../../images/logo.png';
import './Footer.css';
import { NavLink } from 'react-router-dom';



const Footer = () => {
    return (
        <footer className="mini-container">
            <Grid className="footer-container" container spacing={2}>
                <Grid item xs={3}>
                    <NavLink to="/home"><img src={imgLink} alt="live and learn logo" /></NavLink>
                </Grid>
                <Grid className="contact-link" item xs={6}>
                    <Grid className="footer-link-container" container spacing={0}>
                        <Grid item xs={4}>
                            <NavLink to="/allTeacher">All Teacher</NavLink>
                        </Grid>
                        <Grid item xs={4}>
                            <NavLink to="/account">Account</NavLink>
                        </Grid>
                        <Grid item xs={4}>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="subscribe" item xs={3}>
                    <h2>Subscribe</h2>
                    <TextField label="Write Your Email" variant="standard" /><br />
                    <br />

                    <Button variant="contained">SUBSCRIBE</Button>

                </Grid>
            </Grid>
        </footer>
    );
};

export default Footer;