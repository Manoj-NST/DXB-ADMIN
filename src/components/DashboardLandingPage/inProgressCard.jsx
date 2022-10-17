import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

export default function InProgressCard() {
  return (
    <div>
    <h2 style={{color:"#FF0000"}}>In Progress</h2>
    <br />
      <Card sx={{ maxWidth: 450 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6} align="left" color="red">
              <b>SHECOMMERZ</b>
            </Grid>
            <Grid item xs={6} align="right">
              <b>₹60,90,000</b>
            </Grid>
            <Grid item xs={4} align="center">
              <b>8</b>
            </Grid>
            <Grid item xs={4} align="center">
              <b>10</b>
            </Grid>
            <Grid item xs={4} align="center">
              <b>1288</b>
            </Grid>
            <Grid item xs={4} align="center" color="blue">
              <b>FIELD OFFICERS</b>
            </Grid>
            <Grid item xs={4} align="center" color="blue">
              <b>LOCATION</b>
            </Grid>
            <Grid item xs={4} align="center" color="blue">
              <b>DISBURSED</b>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <br />
      <h2 style={{color:"#FF0000"}}>MiFiX Users</h2>
      <br />
      <Card sx={{ maxWidth: 250 }}>
        <CardContent align="center">
            <p><b>5</b></p>
            <p color='blue'>BRANCH MANAGERS</p>
        </CardContent>
      </Card>
    </div>
  );
}
