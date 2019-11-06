import React from 'react';
import '../style/style.css';
// import {BrowserRouter as Router, Link} from 'react-router-dom';
// import Router from 'react-router-dom/Router';
import styled from 'styled-components';
import {UnderHome} from '../Components/Under_Home';

const Styl = styled.div`
.ho{
	color:dimgray;
	text-align:center;
}
.words{
	color:floralwhite;
	font-size:20px;
	font-family:serif;
	position:absolute;
	margin-top:-22vh;
	padding:2.5vh;
	background:rgba(80,50,40,0.7);
	border-left: 6vh solid dimgray;
	border-top: 3vh solid transparent; 
	border-bottom: 6vh solid dimgray; 
}
@media screen and (max-width:500px ){
	.words{padding:2vh; margin-top:-10vh}
}
.words2{
	color:white;
	font-size:35px;
}
.pic{
	margin-top:2vh;
	position:relative;
	width:100%;
}

.ho_img{
	width:30vw;
	height:20vh;
	margin:1%;
	border-radius:20px 20px 20px;
	box-shadow:-9px 12px 15px  black
}

@media screen and (max-width:1200px){
	.ho_img{width:20vw;  height:20vh}
}
.homg{
	width:40px;
	height:15vh;
	
}
.ho_img_cont{
	margin-top:2vh;
	display:inline-flex;
	justify-content:left;
	height:auto;
	width:20px;
	overflow-y:hidden;
}
.und_wo{
	position:absolute;
	width:10vw;
	margin-top:-8vh;
	margin-left:1vw;
	z-index:20;
	color:white;
	background:rgba(10,15,15,0.6);
}
.und_img_cont{
	margin:5%;
	overflow:hidden;
}
.undcont{
	margin:2%;
	overflow:hidden;
	display:flex;
	background:red
}
.lk{
	height:100px;
	align-items:center;
	margin-top:-30px;
}
.proj_wo{
	background:rgba(0,0,0,0.5);
	color:white;
	padding-bottom:10px;
	padding-top:10px;
	margin-left:2%;
	width:96%;	
	font-size:15px;
}
.kl{
animation: klo 20s infinite;
width:350px;
height:auto;
overflow:hidden;
align-items:center;
}
.clients{
	font-size:20px;
	font-family:times
}
@keyframes klo{
	0%{margin-top:-50px}
	100%{margin-top:-1000px}
}
`;
const Home = () =>(
	<Styl>
<h3 style = {{fontFamily:'gothic'}} className = 'tc'>Welcome to <span style = {{fontSize:'30px',fontWeight:'bolder'}}>Brikson Associates</span></h3>
<img className ="pic"  src =  {require('../Real_Estate/one.jpg')} alt = 'images' />
<div className = "words"><div>We're the Right Partner</div>
<div className = "words2">For a Concrete Finish</div></div>
<UnderHome/>
</Styl>
);




export default Home;