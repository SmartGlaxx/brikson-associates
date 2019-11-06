import React from 'react';
import '../style/style.css';
import '../style/bootstrap.min.css';
import styled from 'styled-components';
import {Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Sty = styled.div`
.brands{
	color:white;
	font-size:35px;
	font-family:times;
	top:0;
	display:flex;
	align-content:center;
	text-decoration:none;
}
.menubar{
	color:red;
	background:white;
	font-size: 20px;
	
}
.items{
	color:white;
	text-decoration:none;
	margin-left:10px;
	margin-right:10px;
}
.menubar{
	top:0;
	background: dimgray;
	height:35vh;
	z-index:1000;
	color:white;
	position:fixed;
	width:100vw;
}
`;
const MenuBar =()=>(
	<Sty>
	<Navbar className = "menubar" expand = 'md'>
		<NavLink to = '/' className ="brands"style ={{color:'white',justifyContent:'center'}} >Brikson Associates Ltd</NavLink>
		<Navbar.Toggle />
		<Navbar.Collapse>
			<Nav className = " ml-auto" >
				<NavLink to="/" exact activeStyle = {{color:'black', fontSize:'25px'}} className = "items">Home</NavLink>
				<NavLink to="/about" activeStyle = {{color:'black', fontSize:'25px'}} className = "items">About Us</NavLink>
				<NavLink to = "/services" activeStyle = {{color:'black', fontSize:'25px'}} className = "items">Services</NavLink>
				<NavLink to = "/portfolio" activeStyle = {{color:'black', fontSize:'25px'}} className = "items">Portfolio</NavLink>
				<NavLink to = "/contact"  activeStyle = {{color:'black', fontSize:'25px'}}className = "items">Contact Us</NavLink>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
	</Sty>
	)


export default MenuBar;