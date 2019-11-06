import React ,{Component} from 'react';
import '../style/style.css';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import Blank from './Blank';
import {Admin} from './Admin';


const Styl = styled.div`
.ab{
	color:dimgray;
	text-align:center;
}
.h{
	font-size: 35px;
	font-family: oxygen
}
p{
	font-size: 22px;
	font-family: oxygen
}
.smalls{
	position:absolute;
	margin-top:-10vh;
	background:rgba(10,15,15,0.6);
	padding:2vh;
	font-size:20px;
	font-family:times;
	color:white;
}
.About_pic{
	position:relative;
}
.move{
	animation: move 2s;
	text-align:justify;
	// background:rgba(50,40,30,0.5);
	// color:white;
}
h5{
	text-align;
	text-align:center;
}

// @keyframes move
// {
// 	1%{margin-top: -150px;}
// }
`;

class About2 extends Component{

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
	}
	<form>
		<input type = 'text' placeholder = 'email' onChange = {this.onChangeEmail}/>
		<input type = 'password' placeholder = 'password' onChange = {this.onChangePass}/>
		<input type = 'submit' value = 'Login' onClick = {()=>this.onRouteChange()}/>
	</form>

</div>
);
}
}
export default About2;