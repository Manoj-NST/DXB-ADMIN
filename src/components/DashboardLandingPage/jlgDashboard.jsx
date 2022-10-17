import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function BasicCard(props) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6} align="left">
            <Typography sx={{ fontSize: 14 }} color="red" gutterBottom>
              {props.day}
            </Typography>
          </Grid>
          <Grid item xs={6} align="right">
            <Typography sx={{ fontSize: 14 }} color="blue" gutterBottom>
              <b>₹{props.dayAmount}</b>
            </Typography>
          </Grid>
          <Grid item xs={6} align="center">
            <b>₹{props.sourcedAmount}</b>
          </Grid>
          <Grid item xs={6} align="center">
            <b>₹{props.sourcedAmount}</b>
          </Grid>
          <Grid item xs={6} align="center" color="blue">
            <b>SOURCED</b>
          </Grid>
          <Grid item xs={6} align="center" color="blue">
            <b>DISBURSED</b>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default function CardOne() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
            <BasicCard
                day="YESTERDAY"
                dayAmount="0"
                sourcedAmount="0"
                disbursedAmount="0" />
        </Grid>
        <Grid item xs={3}>
            <BasicCard
                day="TODAY"
                dayAmount="0"
                sourcedAmount="0"
                disbursedAmount="0" />
        </Grid>
        <Grid item xs={3}>
            <BasicCard
                day="THIS MONTH"
                dayAmount="1,20,000"
                sourcedAmount="69,00,00"
                disbursedAmount="42,00,00,000" />
        </Grid>
      </Grid>
    </div>
  );
}
