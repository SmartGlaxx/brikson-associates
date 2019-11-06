import React,{Component} from 'react';
import styled from 'styled-components';
import About from './About';
import {Nav, Navbar} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Redirect, NavLink} from 'react-router-dom';

const Styl = styled.div`
.a{
	color:blue;
	
}
.admin{
	color:blue;
	font-size:20px
}
`;

export  class Admin extends Component{
	constructor(props){
		super(props);

		this.state={
			user:'',
			password:'',
			
		}
	}
onChangeUser = (e)=>{
		const us = this.setState({user:e.target.value});
		return us;
}
onChangePassword = (e)=>{
		const pw = this.setState({password:e.target.value});
		return pw;
}
onSubmit = ()=>{
		if(this.state.user.toLowerCase() === 'e' && this.state.password === '1'){
			return(this.setState({loggedIn:true})
			if(this.state.loggedIn===true){
				console.log('loggedIn')
			}else{
					console.log('loggdOut')
			})
		}else{
			console.log('Try Again')
		}
}


render(props){
	return(
		<Styl>
		<form >
		<Nav>
		<NavLink to="/about" exact >Linl</NavLink>
		</Nav>
		<label className='admin'>Admin Login</label>
		<input onChange = {this.onChangeUser} className = 'a form-control w-50' type = "text" placeholder = 'Enter User Name or Email'/>
		<input onChange = {this.onChangePassword} className = 'a form-control w-50' type = "password" placeholder = 'Enter Password'/>
		<button type = 'submit' className='btn btn-info' onClick = {props.loginHandle.bind(this)}>Log In</button>
		</form>	
		</Styl>
		)
	}
	
}


