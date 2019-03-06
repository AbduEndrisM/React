
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

import Button from '@material-ui/core/Button';



class AddUser extends Component {

constructor(props){
      super(props);
      this.state={
        first_name:'',
        last_name:'',
        email:'',
        password:''
      }
    }

    
    handleClick(event){
      var apiBaseUrl = "http://localhost:4000/api/";
      console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
      //To be done:check for empty values before hitting submit
      var self = this;
      var payload={
      "first_name": this.state.first_name,
      "last_name":this.state.last_name,
      "email":this.state.email,
      "password":this.state.password
      }
      axios.post(apiBaseUrl+'/register', payload)
     .then(function (response) {
       console.log(response);
       if(response.data.code == 200){
        //  console.log("registration successfull");
         var loginscreen=[];
         loginscreen.push(<Login parentContext={this}/>);
         var loginmessage = "Not Registered yet.Go to registration";
         self.props.parentContext.setState({loginscreen:loginscreen,
         loginmessage:loginmessage,
         buttonLabel:"Register",
         isLogin:true
          });
       }
     })
     .catch(function (error) {
       console.log(error);
     });
    }
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
         
               
 
               
         <Button variant="contained" color="primary" className={classes.button}>
       Save 
      </Button>



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
};

export default withStyles(styles, { withTheme: true })(AddUser);
