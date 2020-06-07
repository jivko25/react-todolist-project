// import './App.css';
import React from 'react';
import Register from './Register';
import './Stylesheet.css';
// import ReactDOM from 'react-dom';

class ToDoList extends React.Component{
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
            works.push(title);
            localStorage.setItem('works', JSON.stringify(works));
        } 
        else{
            var works = JSON.parse(localStorage.getItem('works'));
            works.push(title);
            localStorage.setItem('works', JSON.stringify(works));
        }
        this.setState({
            works: JSON.parse(localStorage.getItem('works'))
        });
    }
    delete(e){
        var index = e.target.getAttribute('data-key');
        var list = JSON.parse(localStorage.getItem('works'));
        list.splice(index, 1);
        this.setState({
            works: list
        });
        localStorage.setItem('works', JSON.stringify(list));
    }
    render(){
        return(
            <div>
                <center>
                <h2></h2>
                <input type="text" placeholder="Add new task..." ref="title"/>
                <input type="button" class="btn success" value="Add" class onClick={this.add.bind(this)}/>
                <br></br>
                <ul>
                    {this.state.works.map(function(work, index){
                        return(
                            // <li key={index}>{work}<button class="btn" onClick={this.delete.bind(this)} data-key={index}><i class="fa fa-trash"></i></button></li>
                            <li key={index}>{work} <input type="button" value="X" onClick={this.delete.bind(this)} data-key={index}/></li>
                        );
                    },this)}
                </ul>
                </center>
            </div>
            
        );
    }
}

export default ToDoList;