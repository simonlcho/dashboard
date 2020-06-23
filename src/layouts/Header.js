import React, { useState, useEffect } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link} from "react-router-dom"
import {makeStyles} from "@material-ui/styles"
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },  
  toolbarMargin: {
      ...theme.mixins.toolbar,
      marginLeft: "2em",
      marginRight: "2em",
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  },
}))

export default function Header(props) {  
  const classes = useStyles()

  const [tabSelectedIndex, setSelectedTabIndex] = useState(0)

  const handleTabChange = (e, newValue) => {
    setSelectedTabIndex(newValue) 
  }  

  const routes = [
    {name: "Filtering Criteria", link: "/", activeIndex: 0},
    {name: "Gantt Chart", link: "/ganttchart", activeIndex: 1},
    {name: "Line Chart", link: "/linechart", activeIndex: 2},
    {name: "Heat Map", link: "/heatmap", activeIndex: 3}                                
  ]

  useEffect(() => {
      [...routes].forEach ( route => {
        if (window.location.pathname === route.link) {
            if (tabSelectedIndex !== route.activeIndex) {
              setSelectedTabIndex(route.activeIndex);
            }
        }
      })
  }, [routes, tabSelectedIndex]);

  const tabs = (
    <Tabs 
        value={tabSelectedIndex} 
        onChange={handleTabChange} 
        className={classes.tabContainer}
        indicatorColor="primary"
    >
        {routes.map((option, i) => (
          <Tab 
            key={i}
            className={classes.tab} 
            component={Link} 
            to={option.link}
            label={option.name}
          />
        ))}
    </Tabs>
  )

  const handleDrawerOpen = () => {
    props.setShowSideBar(true);
  }          

  const drawer = (
      <IconButton
      color="inherit"
      onClick={handleDrawerOpen}
      edge="start"
    >
      <MenuIcon />
    </IconButton>
  )

  return (
        <AppBar 
          position="fixed" 
          color="primary" 
          className={props.showSideBar ? classes.appBar : null}
        >
          <Toolbar className={classes.toolbarMargin} disableGutters>

            {/* {props.showDrawer ? drawer : null} */}

            <Typography variant="h6" noWrap>
              Sample Dashboard
            </Typography>  
            {/* {tabs}            */}
          </Toolbar>
        </AppBar>
  );
}