import React ,{Component} from 'react';
import '../style/style.css';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import Blank from './Blank';
import {About} from './About';


const Styl = styled.div`
.input{
	color:black;
	text-align:center;
	width:100%
}
.rightBox{
	float:right;
}
.admin{
	display:block;
}
`;

class Admin extends Component{
	constructor(){
			super();
			this.state={
				route:'signInAdmin',
				}
			}

	onRouteChange = (event)=>{
	this.setState({route:'admin'});
	}

	render(){
		return(
				<div className = "admin">
					<div>
						<h3>Upload Projects</h3>
					</div>
					<div className = 'rightBox' style = {{float:'end'}}>
						{
							this.state.route === 'signInAdmin'?
							<Blank />:
								<Router>
								<Redirect to ='/signInAdmin'/>
								</Router>		
						}
						<div className = 'shadow-5' style={{ justifyContent:'center', width:'100px'}}>
							<Styl>
								<form >
									<input className = 'form-control grow input btn-info' type = 'submit' value = 'Sign Out' onClick = {()=>this.onRouteChange()}/>
								</form>
							</Styl>
						</div>
					</div>
				</div>
			);
		}
}
export default Admin;