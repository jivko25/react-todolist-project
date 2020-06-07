import React from 'react';
import './Stylesheet.css';

class NavBar extends React.Component{
    constructor(){
        super();
        this.state = {
            works: []
        }
    }   

    add(){
        var title = this.refs.title.value;
        if(localStorage.getItem('works') == null){
            var works = [];
            var user = localStorage.getItem('user');
            var userdata = localStorage.getItem(user);
            var parse = JSON.parse(userdata);
            var work = parse.tasks;
            var works = JSON.parse(work)
            works.push(title);
            var obj = {'username' : parse.username, 'password' : parse.password, 'permissions' : parse.permissions, 'tasks' : JSON.stringify(works)}
            var strobj = JSON.stringify(obj);
            localStorage.setItem(parse.username,strobj);
            localStorage.setItem('works', JSON.stringify(works))
        } 
        else{
            // localStorage.setItem('works', JSON.stringify(works));
            var user = localStorage.getItem('user');
            console.log(user)
            var userdata = localStorage.getItem(user);
            var parse = JSON.parse(userdata);
            var work = parse.tasks;
            var works = JSON.parse(work)
            works.push(title);
            var obj = {'username' : parse.username, 'password' : parse.password, 'permissions' : parse.permissions, 'tasks' : JSON.stringify(works)}
            var strobj = JSON.stringify(obj);
            localStorage.setItem(parse.username,strobj);
            localStorage.setItem('works', JSON.stringify(works))
        }
        this.setState({
            works: JSON.parse(localStorage.getItem('works'))
        });
    }
    delete(e){
        var index = e.target.getAttribute('data-key');
        var list = JSON.parse(localStorage.getItem('works'));
        console.log(index)
        list.splice(index, 1);
        this.setState({
            works: list
        });
        localStorage.setItem('works', JSON.stringify(list));
        var user = localStorage.getItem('user');
            console.log(user)
            var userdata = localStorage.getItem(user);
            var parse = JSON.parse(userdata);
            var obj = {'username' : parse.username, 'password' : parse.password, 'permissions' : parse.permissions, 'tasks' : JSON.stringify(list)}
            var strobj = JSON.stringify(obj);
            localStorage.setItem(parse.username,strobj);
    }
    logout(){
        this.props.history.push('/login');
        localStorage.removeItem('user');
        localStorage.removeItem('works')
    }
    admin(){
        this.props.history.push('/users');
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
            <div>
                <div class="w3-bar w3-light-blue">
                    <a href="#" class="w3-bar-item w3-button w3-red w3-right" onClick={() => this.logout()}>Logout</a>
                    <a href="#" class="w3-bar-item w3-button w3-red w3-right">{localStorage.getItem('user')}</a>
                    {this.isUserAdmin() ? <a href="#" class="w3-bar-item w3-button w3-red w3-right" onClick={() => this.admin()}>Users</a> : null}
                    <a href="#" class="w3-bar-item w3-button w3-green w3-left" onClick={this.add.bind(this)} value="Add">Add</a>
                    <input type="text" class="w3-bar-item w3-input w3-left w3-light-grey" placeholder="Add new item..." style={{width: "70%" }} ref="title" />
                </div>
                <center>
                    <ul class="list2">
                        {this.state.works.map(function(work, index){
                            return(
                            <li key={index} data-key={index}>{work}<input type="button" value="X" onClick={this.delete.bind(this)} data-key={index}/></li>
                            );
                        },this)}
                    </ul>
                </center>
  </div>
        )
    }
}

export default NavBar;