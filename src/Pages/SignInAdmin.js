import React ,{Component} from 'react';
import '../style/style.css';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import Blank from './Blank';
import {Admin} from './Admin';


const Styl = styled.div`
.input{
	color:black;
	text-align:center;
	width:100%
}

`;

class SignInAdmin extends Component{

constructor(){
		super();

		this.state={
			route:'signInAdmin',
			email:'',
			password:''
		}
	}
onRouteChange = (event)=>{
	event.preventDefault();
	this.setState({route:'admin'});
	}
onChangeEmail = (e)=>{
	this.setState({email:e.target.value});
}
onChangePass = (e)=>{
	this.setState({password:e.target.value});
}
	render(){

		return(

<div className = "move">
<h3 className = "ab">Sign In</h3>
	{
		this.state.route === 'signInAdmin' && this.state.email !== 'emeka' || this.state.password !== '1234'?
		<Blank />:
		<Router>
		<Redirect to ='/admin'/>
		</Router>		
	}<div className = 'shadow-5' style={{ justifyContent:'center', width:'50%'}}>
	<Styl>
	<form >
		<input className = 'form-control input' type = 'text' placeholder = 'E-mail' onChange = {this.onChangeEmail}/>
		<input className = 'form-control input' type = 'password' placeholder = 'Password' onChange = {this.onChangePass}/>
		<input className = 'form-control grow input btn-info' type = 'submit' value = 'Login' onClick = {()=>this.onRouteChange()} style = {{width:'30%', flex:'center'}}/>
	</form>
	</Styl>
	</div>
</div>
);
}
}
export default SignInAdmin;