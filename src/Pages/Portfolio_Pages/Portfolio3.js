import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const St = styled.div`
.move{
	animation: move 2s;
	text-align;
	text-align:justify;
}
h5{
	text-align;
	text-align:center;
}

.pro_pic{
	width:20vw;
	height:20vh;
}
.por_im_con{
	display:grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap:1%;
}
.pp{
	margin-top:8vh;
	text-align;
	text-align:justify;
}
.po{
	color:blue;
	text-align:center;
	
}
`;

const Portfolio3 =()=>(
<St>
<div className = "move">
<h5>A duplex Compled at Mbaitoli</h5>
<div className = "por_im_con">
<img className ='pro_pic' src = {require('../../Real_Estate/four.jpg')} alt = 'images' />
<img className ='pro_pic' src = {require('../../Real_Estate/one.jpg')} alt = 'images' />
<img className ='pro_pic' src = {require('../../Real_Estate/two.jpg')} alt = 'images' />
<img className ='pro_pic' src = {require('../../Real_Estate/three.jpg')} alt = 'images' />
<img className ='pro_pic' src = {require('../../Real_Estate/four.jpg')} alt = 'images' />
<img className ='pro_pic' src = {require('../../Real_Estate/five.jpg')} alt = 'images' />
<img className ='pro_pic' src = {require('../../Real_Estate/six.jpg')} alt = 'images' />
<img className ='pro_pic' src = {require('../../Real_Estate/seven.jpg')} alt = 'images' />
</div>
<p className = "pp">An analogy that Brian Tracy uses in regards to goal setting is that “you cannot hit a
audio session at least twice, ideally three times, and then work on the corresponding
your lifestyle, then prepare a plan to act upon it in the days ahead. You may wish to
create an “Ultimate Goal Setting” journal in which you can record your ideas, thoughts,
and insights.</p>
</div>
<NavLink to ="/portfolio"><h6 className = "po">Return to Our Portfolio</h6></NavLink>
</St>
);

export default Portfolio3;