import React from 'react';
import '../style/style.css';
// import {BrowserRouter as Router, Link} from 'react-router-dom';
// import Router from 'react-router-dom/Router';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Styl = styled.div`
.po{
	color:dimgray;
	text-align:center;
}
.port_img_cont{
	margin-top:5vh;
	display:grid;
	grid-gap:10px;
	grid-template-columns:auto auto auto auto;
	
}
.port_img_anc{
	position:relative;
	margin:10px;
}
.port_img{
	position:relative;
	height:30vh;
	width:100%;
}
.port_wo{
	position:absolute;
	margin-top:-5vh;
	background:rgba(10,15,15,0.6);
	color:white;
}
.move{
	animation: move 2s;
	text-align:justify;
	// background:rgba(50,40,30,0.5);
	// color:white;
}
`;
var BASE_URL1 = "Portfolio/Portfolio1";
var BASE_URL2 = "Portfolio/Portfolio2";
var BASE_URL3 = "Portfolio/Portfolio3";
var BASE_URL4 = "Portfolio/Portfolio4";
var BASE_URL5 = "Portfolio/Portfolio5";
var BASE_URL6 = "Portfolio/Portfolio6";
var BASE_URL7 = "Portfolio/Portfolio7";
var BASE_URL8 = "Portfolio/Portfolio8";
var BASE_URL9 = "Portfolio/Portfolio9";
var BASE_URL10 = "Portfolio/Portfolio10";
var BASE_URL11 = "Portfolio/Portfolio11";


const Portfolio = () =>(
<Styl>
<div className = "move">
<h3 className = 'po'>Our Portfolio</h3>
<div className = "port_img_cont">
	<NavLink to= {BASE_URL1} className ="port_img_anc"><img className = "port_img grow" src = {require('../Real_Estate/two.jpg')} alt = 'images' />
	<div className = "port_wo">A completed Duplex at Orodo, Mbaitoli.</div></NavLink>
	<NavLink to = {BASE_URL2} className ="port_img_anc"><img className = "port_img grow" src = {require('../Real_Estate/three.jpg')} alt = 'images' />
	<div className = "port_wo">A completed Duplex at Orodo, Mbaitoli.</div></NavLink>
	<NavLink to= {BASE_URL3} className ="port_img_anc"><img className = "port_img grow" src = {require('../Real_Estate/four.jpg')} alt = 'images' />
	<div className = "port_wo">A completed Duplex at Orodo, Mbaitoli.</div></NavLink>
	<NavLink to = {BASE_URL4} className ="port_img_anc"><img className = "port_img grow" src = {require('../Real_Estate/five.jpg')} alt = 'images' />
	<div className = "port_wo">A completed Duplex at Orodo, Mbaitoli.</div></NavLink>
	<NavLink to = {BASE_URL5} className ="port_img_anc"><img className = "port_img grow" src = {require('../Real_Estate/six.jpg')} alt = 'images' />
	<div className = "port_wo">A completed Duplex at Orodo, Mbaitoli.</div></NavLink>
	<NavLink to = {BASE_URL6} className ="port_img_anc"><img className = "port_img grow" src = {require('../Real_Estate/seven.jpg')} alt = 'images' />
	<div className = "port_wo">A completed Duplex at Orodo, Mbaitoli.</div></NavLink>
	<NavLink to = {BASE_URL7} className ="port_img_anc"><img className = "port_img grow" src = {require('../Real_Estate/eight.jpg')} alt = 'images' />
	<div className = "port_wo">A completed Duplex at Orodo, Mbaitoli.</div></NavLink>
	<NavLink to = {BASE_URL8} className ="port_img_anc"><img className = "port_img grow" src = {require('../Real_Estate/nine.png')} alt = 'images' />
	<div className = "port_wo">A completed Duplex at Orodo, Mbaitoli.</div></NavLink>
	<NavLink to = {BASE_URL9} className ="port_img_anc"><img className = "port_img grow" src = {require('../Real_Estate/ten.jpg')} alt = 'images' />
	<div className = "port_wo">A completed Duplex at Orodo, Mbaitoli.</div></NavLink>
	<NavLink to = {BASE_URL10} className ="port_img_anc"><img className = "port_img grow" src = {require('../Real_Estate/eleven.jpg')} alt = 'images' />
	<div className = "port_wo">A completed Duplex at Orodo, Mbaitoli.</div></NavLink>
	<NavLink to ={BASE_URL11} className ="port_img_anc"><img className = "port_img grow" src = {require('../Real_Estate/one.jpg')} alt = 'images' />
	<div className = "port_wo">A completed Duplex at Orodo, Mbaitoli.</div></NavLink>
	<NavLink to = {BASE_URL1} className ="port_img_anc"><img className = "port_img grow" src = {require('../Real_Estate/two.jpg')} alt = 'images' />
	<div className = "port_wo">A completed Duplex at Orodo, Mbaitoli.</div></NavLink>
</div>
</div>
</Styl>
);



export default Portfolio;