import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import logo from '../../assets/logo.svg';
import {makeStyles} from '@material-ui/styles';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
    logo: {
        height: '7em'
    }
}))

const Header = (props) => {
    const classes = useStyles()
  return (
    <React.Fragment>
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          {/* <Typography> */}
            {/* Arc Development */}
            <img src={logo} alt='arc dev logo' className={classes.logo}/>
            {/* </Typography> */}
        </Toolbar>
      </AppBar>   
    </ElevationScroll>
    <div className={classes.toolbarMargin}/>
    </React.Fragment>
  );
};

export default Header;
