import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Register2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          username: '',
          password: '',
          permissions: false
        };
      }
    
    
    
      handleSubmit(){
        var item = JSON.stringify(localStorage.getItem('users'));
        let username = JSON.stringify(this.state.username);
        let password = this.state.password;
        let permissions = this.state.permissions;
        var users = [username,password, permissions];
        localStorage.setItem('users', users)
        var newItem = localStorage.getItem('users');
        var parseItem = JSON.parse(newItem);
        // var newItem = JSON.stringify(users);
        console.log(1);    
      }

      // handleChangeUsername = (event) => {
      //   let val = event.target.value;
      //   this.setState({username : val});
      //   }

      //   handleChangePassword = (event) => {
      //     let val = event.target.value;
      //     this.setState({password : val});
      //     }
    
      handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam] : val});
        }
      render(){
        return(
          <form onSubmit={this.handleSubmit}>
            <label>
              1.{this.state.username}
              <input type="text" name= 'username' onChange={this.handleChange}/>
            </label>
            <label>
             2.{this.state.password}
            <input type="text" name= 'password' onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit" />
          </form>
        )
      }
}

export default Register2;