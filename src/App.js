import React from 'react';
import {ThemeProvider, makeStyles } from '@material-ui/styles';
import {BrowserRouter, Route, Switch} from "react-router-dom"

import Header from './layouts/Header';
import FilteringCriteria from './views/FilteringCriteria';
import GanttChart from './views/GanttChart';
import LineChart from './views/LineChart';
import Heatmap from './views/Heatmap';
import Footer from './layouts/Footer';

import theme from './Theme';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }
}));

function App() {

  const classes = useStyles();  

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/dashboard">
          <Switch>
            <Route exact path="/" component={() => 
              <React.Fragment>
                <div className={classes.root} >
                  <Header showSideBar={false} showDrawer={false} />
                  <FilteringCriteria showSideBar={false} />
                </div>
                <Footer showSideBar={false} />
              </React.Fragment>                
              } 
            />
            <Route exact path="/ganttchart" component={() => 
              <React.Fragment>
                <div className={classes.root} >
                  <Header showSideBar={false} showDrawer={false}/>
                  <GanttChart showSideBar={false} />
                </div>          
                <Footer showSideBar={false} />                
              </React.Fragment>
              } 
            />    
            <Route exact path="/linechart" component={() => 
              <React.Fragment>
                <div className={classes.root} >
                  <Header showSideBar={false} showDrawer={false}/>
                  <LineChart showSideBar={false} />
                </div>          
                <Footer showSideBar={false} />                
              </React.Fragment>
              } 
            />
            <Route exact path="/heatmap" component={() => 
              <React.Fragment>
                <div className={classes.root} >
                  <Header showSideBar={false} showDrawer={false}/>
                  <Heatmap showSideBar={false} />
                </div>         
                <Footer showSideBar={false} />                
              </React.Fragment>
              } 
            />
          </Switch>
      </BrowserRouter>     
    </ThemeProvider>     
  );
}

export default App;
