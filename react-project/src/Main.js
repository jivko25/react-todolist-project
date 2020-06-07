import React from 'react';
import ToDoList from './ToDoList';
import NavBar from './NavBar';
import './Stylesheet.css';
import Register from './Register';
import Users from './Users';
import LogIn from './LogIn';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// class Main extends React.Component{
    function Main(){
        return(
            <div>
            {/* <Register3/> */}
            {/* <NavBar/> */}
            {/* <ToDoList/> */}
            {/* <Register/> */}
            {/* <LogIn/> */}
        {/* <BrowserRouter> */}

            <Router>
        <Route exact path="/" component={NavBar} /> 
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/register" component={Register} /> 
        <Route exact path="/users" component={Users}/>
            </Router>

        {/* </BrowserRouter>     */}
            </div>
        )
    }


export default Main;