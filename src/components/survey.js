
import React, { Component } from 'react';
// import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import HomeIcon from '@material-ui/core/HomeIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Mail from '@@material-ui/core/Mail';
import Menu from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';


class Survey extends Component {



  render() {
    const { classes } = this.props;

    const drawer = (
      <div >
        <Hidden smDown>
        <div className={classes.toolbar} />
          
      </Hidden>

<MenuList >
 <MenuItem component ={Link} to="./addsurvey"><IconButton>{<Menu />}</IconButton >Survey</MenuItem>   
<MenuItem component ={Link} to="./adduser"><IconButton>{<Menu />}</IconButton > User</MenuItem>
<MenuItem component ={Link} to="./report"><IconButton>{<Menu />}</IconButton > Report</MenuItem>
<MenuItem component ={Link} to="./logout"> <IconButton>{<Menu />}</IconButton > Logout</MenuItem>
      
</MenuList>
      
      </div>
    );
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"

              //   open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>
            Abdu
              </Typography>
          <Typography paragraph>
            Jean
              </Typography>
          <Typography paragraph>
            Maduro
              </Typography>
        </main>
      </div>
    )
  }
}
Survey.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

export default withStyles(styles, { withTheme: true })(Survey);
