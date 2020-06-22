import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import LineChartComponent from './LineChartComponent';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,    
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
      minWidth: 0 // add this so the chart can auto resize (shrink)
    },    
    lineBottomMargin: {
      marginBottom: "0.5em"
    }
  }));

  export default function LineChart() {

    const classes = useStyles();

    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Typography variant="h6">
          SI Civil Hours Per Month
        </Typography>        

        <div className={classes.lineBottomMargin}></div>

        <LineChartComponent />

      </main>
    );
  }
  
