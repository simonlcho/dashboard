import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import GanttChartComponent from './GanttChartComponent';
import LineChartComponent from './LineChartComponent';
import HeatmapComponent from './HeatmapComponent';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginLeft: "0.5em",
      marginRight: "0.5em",      
      height: '100em'
    },
    formstyle: {
      flexGrow: 1,
    },
    buttonstyle: {
      textTransform: 'none',
      marginRight: "1em"
    },
    toolbar: theme.mixins.toolbar,    
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
      minWidth: 0 // add this so the chart can auto resize (shrink)      
    },    
    lineBottomMargin: {
      marginBottom: "1em"
    },
    formControl: {
      marginTop:  "-1.2em"
    },    
  }));

  export default function GanttChart(props) {

    const classes = useStyles();  

    const initialFilteringCriteria = {
      workPackageStatus: "1",
      department: "1",
      fromdate: "June-2019",
      todate: "February-2021"      
    }

    const [showGanttChart, setShowGanttChart] = useState(false);
    const [showLineChart, setShowLineChart] = useState(false);
    const [showHeatMap, setShowHeatMap] = useState(false);

    const [state, setState] = useState(initialFilteringCriteria);    

    const handleFieldChange = e => {
      const {name, value} = e.target;

      setState(prevState => ({
        ...prevState,
        [name]: value
      }));

    };

    const handleGenerateGanttChart = (evt) => {
      evt.preventDefault();
      //alert(`Submitting Work Package Status ${state.workPackageStatus}`);           
      //alert(`Submitting Work Package Status ${state.department}`);        
      //alert(`Submitting From Date ${state.fromdate}`);            
      //alert(`Submitting To Date ${state.todate}`);
      
      setShowGanttChart(true);
      setShowLineChart(false)      
      setShowHeatMap(false);
    }

    const handleGenerateLineChart = (evt) => {
      evt.preventDefault();
      
      setShowGanttChart(false);      
      setShowLineChart(true)
      setShowHeatMap(false);
    }

    const handleGenerateHeatMap = (evt) => {
      evt.preventDefault();
      
      setShowGanttChart(false);      
      setShowLineChart(false)
      setShowHeatMap(true);
    }

    const handleReset = (evt) => {
      evt.preventDefault();
      
      setState(initialFilteringCriteria);
      setShowGanttChart(false);      
      setShowLineChart(false)
      setShowHeatMap(false);
    }

    return (
      <React.Fragment>
        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Typography variant="h6">
          Filtering Criteria
          </Typography>        

          <div className={classes.lineBottomMargin}></div>

          <form noValidate autoComplete="off">

          <div className={classes.formstyle}>
            <Grid container spacing={3}>

              <Grid item xs={3}>
              <FormControl 
                variant="outlined" 
                fullWidth
                size="small"
              >
                <InputLabel 
                  id="selectWorkPackageStatusLabel"
                >
                  Work Package Status
                </InputLabel>
                <Select
                  labelId="selectWorkPackageStatusLabel"
                  id="workPackageStatus"
                  name="workPackageStatus"
                  value={state.workPackageStatus}
                  onChange={handleFieldChange}
                  label="Work Package Status"
                >
                  <MenuItem value={1}>Pre-Construction</MenuItem>
                  <MenuItem value={2}>Construction</MenuItem>
                  <MenuItem value={3}>Completion</MenuItem>
                  <MenuItem value={4}>Pre-Construction, Construction, Completion</MenuItem>
                  <MenuItem value={5}>Pre-Construction, Construction</MenuItem>                                    
                </Select>
              </FormControl>                
              </Grid>

              <Grid item xs={3}>
              <FormControl 
                variant="outlined" 
                fullWidth
                size="small"
              >
                <InputLabel 
                  id="selectDeptLabel"
                >
                  Department
                </InputLabel>
                <Select
                  labelId="selectDeptLabel"
                  id="department"
                  name="department"
                  value={state.department}
                  onChange={handleFieldChange}
                  label="Department"
                >
                  <MenuItem value={1}>Department 1</MenuItem>
                  <MenuItem value={2}>Department 2</MenuItem>
                  <MenuItem value={3}>Department 3</MenuItem>
                  <MenuItem value={4}>Department 4</MenuItem>
                  <MenuItem value={5}>Department 5</MenuItem>                                    
                </Select>
              </FormControl>
              </Grid>

              <Grid item xs={3}>
              <FormControl 
                variant="outlined" 
                fullWidth
                size="small"
              >
                <InputLabel 
                  id="selectFromDateLabel"
                >
                  From Date
                </InputLabel>
                <Select
                  labelId="selectFromDateLabel"
                  id="fromdate"
                  name="fromdate"
                  value={state.fromdate}
                  onChange={handleFieldChange}
                  label="From Date"
                >
                  <MenuItem value={"June-2019"}>June-2019</MenuItem>
                  <MenuItem value={"July-2019"}>July-2019</MenuItem>                  
                  <MenuItem value={"August-2019"}>August-2019</MenuItem>                                    
                </Select>
              </FormControl>                
              </Grid>

              <Grid item xs={3}>
              <FormControl 
                variant="outlined" 
                fullWidth
                size="small"
              >
                <InputLabel 
                  id="selectToDateLabel"
                >
                  To Date
                </InputLabel>
                <Select
                  labelId="selectToDateLabel"
                  id="todate"
                  name="todate"
                  value={state.todate}
                  onChange={handleFieldChange}
                  label="To Date"
                >
                  <MenuItem value={"February-2021"}>February-2021</MenuItem>
                  <MenuItem value={"March-2021"}>March-2021</MenuItem>                  
                  <MenuItem value={"April-2021"}>April-2021</MenuItem>                                    
                </Select>
              </FormControl>                  
              </Grid>

              <Grid item xs={12}>
              <Button 
                variant="contained"
                onClick={handleGenerateGanttChart.bind(this)}
                className={classes.buttonstyle}              
              >
                Generate Gantt Chart
              </Button>

              <Button 
                variant="contained"
                onClick={handleGenerateLineChart.bind(this)}
                className={classes.buttonstyle}                      
              >
                Generate Line Chart
              </Button>              

              <Button 
                variant="contained"
                onClick={handleGenerateHeatMap.bind(this)}
                className={classes.buttonstyle}                      
              >
                Generate Heat Map
              </Button>              

              <Button 
                variant="contained"
                onClick={handleReset.bind(this)}
                className={classes.buttonstyle}                      
              >
                Reset
              </Button> 

              </Grid>

            </Grid>
          </div>

          {showGanttChart && <GanttChartComponent />}

          {showLineChart && <LineChartComponent />}

          {showHeatMap && <HeatmapComponent />}

          </form>

          <div className={classes.lineBottomMargin}></div>

        </main>

      </React.Fragment>
    );
  }
