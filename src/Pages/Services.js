import React from 'react';
import '../style/style.css';
// import {BrowserRouter as Router, Link} from 'react-router-dom';
// import Router from 'react-router-dom/Router';
import styled from 'styled-components';

const Styl = styled.div`
.se{
	color:dimgray;
	text-align:center;
}
.o{
	font-size: 35px;
	font-family: oxygen;
}
p{
	font-size: 22px;
	font-family: oxygen;

}
.serv_img{
	width:80%;
	height:20vh;
}
.move{
	animation: move 2s;
	text-align;
	text-align:justify;
	// background:rgba(50,40,30,0.5);
	// color:white;
}
h5{
	text-align;
	text-align:center;
}

`;
const Services = () =>(
<Styl>
<div className = 'move'>
<h3 className ="se">Services</h3>
<p><span className = 'o'>O</span>ur Services include:</p>
<ul>
<div className = "row">
<div className = 'col-sm-6'><h5>Residential Building Construction</h5><p>An analogy that Brian Tracy uses in regards to goal setting is that “you cannot hit a
target that you can’t see.” It is therefore imperative that you sit down and decide exactly
what you really want, in every area of your life. To do so, ideally you should follow the
step-by-step system that Brian has created for you in this groundbreaking program. If
you want to gain its full benefits, we urge you to make full use of this guidebook along
with the audio segment to assist you in your goal-setting initiatives</p></div><div className = "col-sm-6"><img className = "serv_img" src = {require('../Real_Estate/six.jpg')} alt = 'images' /></div></div>
<p></p>
<div className = "row">
<div className = 'col-sm-6'><h5>Commercial Building Construction</h5><p>An analogy that Brian Tracy uses in regards to goal setting is that “you cannot hit a
target that you can’t see.” It is therefore imperative that you sit down and decide exactly
what you really want, in every area of your life. To do so, ideally you should follow the
step-by-step system that Brian has created for you in this groundbreaking program. If
you want to gain its full benefits, we urge you to make full use of this guidebook along
with the audio segment to assist you in your goal-setting initiatives</p></div><div className = "col-sm-6"><img className = "serv_img" src = {require('../Real_Estate/seven.jpg')} alt = 'images' /></div></div>

<p></p>
<div className = "row">
<div className = 'col-sm-6'><h5>Construction Consultancy Services</h5><p>An analogy that Brian Tracy uses in regards to goal setting is that “you cannot hit a
target that you can’t see.” It is therefore imperative that you sit down and decide exactly
what you really want, in every area of your life. To do so, ideally you should follow the
step-by-step system that Brian has created for you in this groundbreaking program. If
you want to gain its full benefits, we urge you to make full use of this guidebook along
with the audio segment to assist you in your goal-setting initiatives</p></div><div className = "col-sm-6"><img className = "serv_img" src = {require('../Real_Estate/eight.jpg')} alt = 'images' /></div></div>

<p></p>
<div className = "row">
<div className = 'col-sm-6'><h5>Construction Supplies Services</h5><p>An analogy that Brian Tracy uses in regards to goal setting is that “you cannot hit a
target that you can’t see.” It is therefore imperative that you sit down and decide exactly
what you really want, in every area of your life. To do so, ideally you should follow the
step-by-step system that Brian has created for you in this groundbreaking program. If
you want to gain its full benefits, we urge you to make full use of this guidebook along
with the audio segment to assist you in your goal-setting initiatives</p></div><div className = "col-sm-6"><img className = "serv_img" src = {require('../Real_Estate/nine.png')} alt = 'images' /></div></div>
		
	</ul>
</div>
</Styl>
);




export default Services;