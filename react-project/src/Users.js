import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';

class Users extends React.Component{
    constructor(){
        super();
        this.state ={
            list: JSON.parse(localStorage.getItem('users'))
        }
    } 

    showusers(){
        var users = []
        for (var i=1; i <= localStorage.length; i++)  {
            if(localStorage.key(i) == 'works' || localStorage.key(i) == 'user' || localStorage.key(i) == '' || localStorage.key(i) == 'users' || localStorage.key(i) == null)
            {
                continue;
            }
            var user = localStorage.key(i)
            users.push(user)
         }
         console.log(users);
         var final = JSON.stringify(users)
         this.setState({
            list: final
        });
         localStorage.setItem('users',final)
    }
    delete(e){
        var index = e.target.getAttribute('data-key');
        var list = JSON.parse(localStorage.getItem('users'));
        list.splice(index, 1);
        this.setState({
            list: list
        });
        localStorage.setItem('users', JSON.stringify(list));
    }
    update(e){
        var index = e.target.getAttribute('data-key');
        var list = JSON.parse(localStorage.getItem('users'));
        var item = localStorage.getItem(list[index]);
        var final = JSON.parse(item);
        var newobj = {'username' : final.username, 'password' : final.password, 'permissions' : true};
        localStorage.setItem(final.username, JSON.stringify(newobj));
        console.log(localStorage.getItem(final.username))
    }
    downdate(e){
        var index = e.target.getAttribute('data-key');
        var list = JSON.parse(localStorage.getItem('users'));
        var item = localStorage.getItem(list[index]);
        var final = JSON.parse(item);
        var newobj = {'username' : final.username, 'password' : final.password, 'permissions' : false};
        localStorage.setItem(final.username, JSON.stringify(newobj));
        console.log(localStorage.getItem(final.username))
    }
    logout(){
        this.props.history.push('/login');
        localStorage.removeItem('user');
    }
    userPage(){
        this.props.history.push('/');
    }
    adminPage(){
        this.props.history.push('/users');
    }
    isUserAdmin(){
        var currentuser = localStorage.getItem('user');
        var userdata = localStorage.getItem(currentuser);
        var parse = JSON.parse(userdata);
        return(
            parse.permissions
        )
    }
    render(){
        return(
            <center>
            <div>
            <div class="w3-bar w3-light-blue">
                    <a href="#" class="w3-bar-item w3-button w3-red w3-right" onClick={() => this.logout()}>Logout</a>
                    <a href="#" class="w3-bar-item w3-button w3-red w3-right" onClick={() => this.userPage()}>{localStorage.getItem('user')}</a>
                    {this.isUserAdmin() ? <a href="#" class="w3-bar-item w3-button w3-red w3-right" onClick={() => this.adminPage()}>Users</a> : null}
                </div>
                    <ul class="list">
                        {this.state.list.map(function(list, index){
                            return(
                            <li key={index}>{list}<input type="button" onClick={this.update.bind(this)} data-key={index} value="up"/><input type="button" onClick={this.downdate.bind(this)} data-key={index} value="down"/></li>
                            );
                        },this)}
                     </ul>
            </div>
            </center>
        )
    }
}

export default Users