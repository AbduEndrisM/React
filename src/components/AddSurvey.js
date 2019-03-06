
import React, { Component } from 'react';
// import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline'; 
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton'; 
import Menu from '@material-ui/icons/Menu'; 
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './login';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';



class AddUser extends Component {
  state = {
    // The first commit of Material-UI
    selectedDate: new Date('2014-08-18T21:11:54'),
  };
  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };
constructor(props){
      super(props);
      this.state={
        
        first_name:'',
        last_name:'',
        email:'',
        password:''
        
      }
    }

    
  
  render() {
    const { classes } = this.props;
    const { selectedDate } = this.state;

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
          <div>
        <MuiThemeProvider>
          <div  align="center">
          <AppBar
                 title="Add Survey"  style={{ background: '#2E3B55', textAlign:"center" }}  showMenuIconButton={false} 
               />

  
<div> <InputLabel htmlFor="component-helper"  align="left">Survey Name</InputLabel>
</div>
<div><TextField
          id="filled-full-width"
          label="Label"
          style={{ margin: 8 }}
           helperText="Full width!"
          fullWidth
          margin="normal"
          variant="filled"
          
          floatingLabelText="Enter Survey Title"
          InputLabelProps={{
            shrink: true,
          }}
        /> </div>
         

  
<div> <InputLabel htmlFor="component-helper"  align="left">Description</InputLabel>
</div>
<div><TextField
          id="filled-full-width"
          label="Label"
          style={{ margin: 8 }}
           helperText="Full width!"
          fullWidth
          margin="normal"
          floatingLabelText="Enter Description "
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        /> </div>
         
               
<div align="left">

         <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container className={classes.grid} justify="space-around">
          <DatePicker
            margin="normal"
            label="Date picker"
            value={selectedDate}
            onChange={this.handleDateChange}
          />
          <TimePicker
            margin="normal"
            label="Time picker"
            value={selectedDate}
            onChange={this.handleDateChange}
          />
        </Grid>
      </MuiPickersUtilsProvider>

 </div>
       

 <div><Button variant="contained" color="primary" className={classes.button}>
       Save 
      </Button></div>     
         

{/* 
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Add" primary={true} style={style} onClick={(event) => this.handleClick(event)}/> */}
          </div>
         </MuiThemeProvider>
      </div>
        </main>
      </div>
    )
  }
}
AddUser.propTypes = {
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
const style = {
  margin: 15,
  grid: {
    width: '60%',
  },
};


AddUser.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AddUser);
