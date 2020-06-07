import './App.css';
import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  // setData(){
  //   localStorage.setItem('myData', true);
  // }
  // getData(){
  //   let data = localStorage.getItem('myData');
  //   console.log(data);
  // }
  // removeData(){
  //   localStorage.removeItem('myData');
  // }
  // render(){
  // return (
  //   <div className="App">
  //     <button onClick={() => this.setData()}>Set Data</button>
  //     <button onClick={() => this.getData()}>get Data</button>
  //     <button onClick={() => this.removeData()}>removeData</button>
  //   </div>
  // );
  // }

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      permissions: false
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit=(event) =>{
    event.preventDefault();
    const item = localStorage.getItem('users');
    const users = [item];
    // let new = localStorage.setItem(this.state.username, this.state.password);
    let username = this.state.username;
    let password = this.state.password;
    if(password !== ""){
    users.push(username);
    users.push(password);
    users.push(this.state.permissions)
    // localStorage.setItem('users', users);
    console.log("Succes");
    }
    else
    {
      console.log("No Succes");
    }
    var tr = users[4];
    localStorage.setItem('users', users)
    console.log(users);
  }

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
          <input type="text" name= 'username' onChange={this.handleChange} />
        </label>
        <label>
         2.{this.state.password}
        <input type="text" name= 'password' onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }

}

export default App;
