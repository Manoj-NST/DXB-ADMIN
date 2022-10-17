import React from 'react';
import Grid from '@mui/material/Grid';
import Sidebar from '../components/sideBar/Sidebar';
import UserForm from '../components/UserCreation/UserForm';

export default function UserCreationPage() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={2.5}>
          <Sidebar/>
        </Grid>
        <Grid item xs={9}>
            <UserForm />
        </Grid>
      </Grid>
    </div>
  );
}
