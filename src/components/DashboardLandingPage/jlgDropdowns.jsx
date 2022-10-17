import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';

function createRow1(location) {
  return { location };
}
const rows1 = [
  createRow1('None'),
  createRow1('Chennai'),
  createRow1('Bangalore'),
  createRow1('Delhi'),
  createRow1('Hyderabad'),
  createRow1('Kochi'),
  createRow1('Kolkatta'),
];

function createRow2(bm) {
  return { bm };
}
const rows2 = [createRow2('Varun'), createRow2('Praveen'), createRow2('Manish')];

function createRow3(product) {
  return { product };
}
const rows3 = [createRow3('JLG'), createRow3('Top Up'), createRow3('Loan Renewal'), createRow3('FAR')];

function createRow4(range) {
  return { range };
}
const rows4 = [createRow4('This Month'), createRow4('30 Days'), createRow4('60 Days'), createRow4('90 Days')];

export default function SelectLabels() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4.5}></Grid>
        <Grid item xs={2.5}>
          <FormControl sx={{ m: 1, minWidth: 300 }}>
            <InputLabel id="demo-simple-select-helper-label">Location</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Age"
              onChange={handleChange}
            >
              {rows1.map((rowItem) => (
                <MenuItem value={rowItem.location}>{rowItem.location}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2.5}>
          <FormControl sx={{ m: 1, minWidth: 300 }}>
            <InputLabel id="demo-simple-select-helper-label">Branch Manager</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Age"
              onChange={handleChange}
            >
              {rows2.map((rowItem) => (
                <MenuItem value={rowItem.bm}>{rowItem.bm}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2.5}>
          <FormControl sx={{ m: 1, minWidth: 300 }}>
            <InputLabel id="demo-simple-select-helper-label">Product</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Age"
              onChange={handleChange}
            >
              {rows3.map((rowItem) => (
                <MenuItem value={rowItem.product}>{rowItem.product}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}

export function SelectLabels1() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
    <div>
      <h2>In Progress</h2>
    </div>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-helper-label">Range</InputLabel>
        <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" label="Age" onChange={handleChange}>
          {rows4.map((rowItem) => (
            <MenuItem value={rowItem.range}>{rowItem.range}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
