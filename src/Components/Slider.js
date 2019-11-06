import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
	width: 100%;
	padding:32px;
	.imgs{
	height:30vh;
	width:100%;
	},
	p{
		font-size:20px;
		font-family:times
	}
`;


export default class SlideView extends React.Component{
	render(){
	var settings = {
		speed:500,
		slidesToShow:1,
		slidesToScroll:1,
		infinite:true,
		autoplay:true,
		dots:true,
		adaptiveHeight:true,
		pauseOnDotsHover:true,
		
	}
	return(
		<Wrapper>
		<h5 className = 'tc'>Some of Our Projects</h5>
			<Slider {...settings}>
				<div className = 'grow tc bg-black text-white pa1'><img className = "imgs " src = {require('../Real_Estate/two.jpg')} alt = 'images' /><p> <span style = {{fontSize:'30px'}}>w</span>ith over two million students, Brian Tracy is considered by many to be the
success guru. Brian’s graduates have reaped a mult</p></div>
				<div className = 'grow tc bg-black text-white pa1'><img className = "imgs " src = {require('../Real_Estate/three.jpg')} alt = 'images' /><p> <span style = {{fontSize:'30px'}}>w</span>ith over two million students, Brian Tracy is considered by many to be the
success guru. Brian’s graduates have reaped a mult</p></div>
				<div className = 'grow tc bg-black text-white pa1'><img className = "imgs " src = {require('../Real_Estate/five.jpg')} alt = 'images' /><p> <span style = {{fontSize:'30px'}}>w</span>ith over two million students, Brian Tracy is considered by many to be the
success guru. Brian’s graduates have reaped a mult</p></div>
				<div className = 'grow tc bg-black text-white pa1'><img className = "imgs " src = {require('../Real_Estate/six.jpg')} alt = 'images' /><p> <span style = {{fontSize:'30px'}}>w</span>ith over two million students, Brian Tracy is considered by many to be the
success guru. Brian’s graduates have reaped a mult</p></div>
				<div className = 'grow tc bg-black text-white pa1'><img className = "imgs " src = {require('../Real_Estate/seven.jpg')} alt = 'images' /><p> <span style = {{fontSize:'30px'}}>w</span>ith over two million students, Brian Tracy is considered by many to be the
success guru. Brian’s graduates have reaped a mult</p></div>
				<div className = 'grow tc bg-black text-white pa1'><img className = "imgs " src = {require('../Real_Estate/eight.jpg')} alt = 'images' /><p> <span style = {{fontSize:'30px'}}>w</span>ith over two million students, Brian Tracy is considered by many to be the
success guru. Brian’s graduates have reaped a mult</p></div>
				<div className = 'grow tc bg-black text-white pa1'><img className = "imgs " src = {require('../Real_Estate/nine.png')} alt = 'images' /><p> <span style = {{fontSize:'30px'}}>w</span>ith over two million students, Brian Tracy is considered by many to be the
success guru. Brian’s graduates have reaped a mult</p></div>
				<div className = 'grow tc bg-black text-white pa1'><img className = "imgs " src = {require('../Real_Estate/ten.jpg')} alt = 'images' /><p> <span style = {{fontSize:'30px'}}>w</span>ith over two million students, Brian Tracy is considered by many to be the
success guru. Brian’s graduates have reaped a mult</p></div>
			</Slider>
		</Wrapper>
	)

	}
}
