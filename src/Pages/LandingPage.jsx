import React from 'react';
import Grid from '@mui/material/Grid';
import InProgressCard from '../components/DashboardLandingPage/inProgressCard';
import CardOne from '../components/DashboardLandingPage/jlgDashboard';
import SelectLabels, { SelectLabels1 } from '../components/DashboardLandingPage/jlgDropdowns';
import Sidebar from '../components/sideBar/Sidebar';

export default function LandingPage() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={2.5}>
          <Sidebar/>
        </Grid>
        {/* <Grid item xs={1}></Grid> */}
        <Grid item xs={9}>
          <div>
            <br />
            <h1 style={{ color: '#123456' }}>Welcome, FedBank Admin!</h1>
            <SelectLabels />
            <br />
            <CardOne />
            <br />
            <SelectLabels1 />
            <br />
            <InProgressCard />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
