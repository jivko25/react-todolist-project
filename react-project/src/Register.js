import React from 'react';
import './Register.css';
import './Stylesheet.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from './NavBar';
import LogIn from './LogIn';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            permissions: false,
            error: '',
            link: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        var username = this.state.username;
        var password = this.state.password;
        var permissions = this.state.permissions;
        if(username.length == 0){
            this.setState({
                error: 'No username yet!'
            });   
        }
        else if(password.length < 8){
            this.setState({
                error: 'Too short password, enter at least 8 symbols!'
            });
        }  
        else{
        if(localStorage.getItem(username) == null){
        var obj = {'username': username, 'password' : password, 'permissions' : permissions, 'tasks' : "[]"};
        var stObj = JSON.stringify(obj);
        localStorage.setItem(this.state.username, stObj);
        var newobj = localStorage.getItem(username);
        var parsObj = JSON.parse(newobj);
        console.log('success');
        this.props.history.push('/login');
        this.setState({
            error: 'Success',
            link: 'LogIn'
        });
        console.log(this.state.link)
        }
        else{
            this.setState({
                error: 'This user already exist'
            });
        }
    }
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam] : val});
        }
    render(){
        
        return(
            <center>
            <div class="container" style={{width: "70%"}}>
            <h1>Register</h1>
        
            <label for="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Your Username" onChange={this.handleChange} name="username" id="email" required/>
        
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" onChange={this.handleChange}name="password" id="psw" required/>

            <button type="submit" class="register" onClick={this.handleClick} component={this.state.link} to="/login">Register</button>
           <strong><p onChange={this.handleChange} name="error">{this.state.error}</p></strong>
          </div>
          </center>
          
        )
    }
}

export default Register;
