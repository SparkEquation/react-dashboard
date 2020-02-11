import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const Front: React.FC<{}> = () => {
    return (
        <div className="front" data-testid="front">
            <Grid container>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <h1>Here should be your App</h1>
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <Link to="/dashboard">Go to Dashboard</Link>
                </Grid>
            </Grid>
        </div >
    );
}

export default Front;
