import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class LogIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            error: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        var username = this.state.username;
        var password = this.state.password;
        if(localStorage.getItem(username) !== null){
        var correct = JSON.parse(localStorage.getItem(username));
        if(correct.password !== password || correct.username !== username){
            this.setState({
                error: 'Wrong username or password!'
            });   
        }
        else{
        this.props.history.push('/');
        localStorage.setItem('user', username);
        console.log('success');
        this.setState({
            error: 'Success'
        });
            var userdata = localStorage.getItem(username);
            var parse = JSON.parse(userdata);
            var work = parse.tasks;
            var works = JSON.parse(work)
            localStorage.setItem('works', JSON.stringify(works))
    }
}
else{
    this.setState({
        error: 'This user doesnt exist'
    })
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
            <h1>Login</h1>
        
            <label for="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Your Username" onChange={this.handleChange} name="username" id="email" required/>
        
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" onChange={this.handleChange}name="password" id="psw" required/>

            <button type="submit" class="register" onClick={this.handleClick}>Login</button>
           <strong><p onChange={this.handleChange} name="error">{this.state.error}</p></strong>
           <Link to="./Register">Don't have an account?</Link>
          </div>
          </center>
          
        )
    }
}

export default LogIn;