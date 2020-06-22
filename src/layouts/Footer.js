import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },      
    footer: {
        height: "3em",
        marginLeft: "1em",
        marginRight: "1em"
    },
    footerText: {
        marginLeft: "0.5em",        
        marginTop: "0.25em",
    },
}))

export default function Footer(props) {
    const classes= useStyles()

    return (
        <footer
            className={props.showSideBar ? classes.appBar : null}        
        >
            <div className={classes.footer}>
                <Divider />     
                <div className={classes.footerText}>
                    Construction Services Tracker
                </div>             
            </div>
        </footer>
    )
}
