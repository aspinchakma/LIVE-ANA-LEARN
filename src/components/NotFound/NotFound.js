import { Grid } from '@mui/material';
import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found">

            <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                <Grid item xs={4}>

                </Grid>
                <Grid item xs={4}>
                    <h1>4<sapn>0</sapn>4</h1>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                </Grid>
                <Grid item xs={4}>

                </Grid>


            </Grid>
        </div>
    );
};

export default NotFound;