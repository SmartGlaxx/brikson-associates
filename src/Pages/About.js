import React from 'react';
import '../style/style.css';
// import {BrowserRouter as Router, Link} from 'react-router-dom';
// import Router from 'react-router-dom/Router';
import styled from 'styled-components';


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

const About = () =>(
<Styl>
<div className = "move">
<h3 className = "ab">About Us</h3>
<p className = "ho"><span className = "h">H</span>aving shared his ideas in more than 2,000 talks and seminars throughout the past 21
years with over two million students, Brian Tracy is considered by many to be the
success guru. Brian’s graduates have reaped a multitude of benefits from his vast
experience and expertise, often transforming their lives from rags to riches. Many who
were struggling financially, and personally, have become self-made millionaires by
following Brian’s advice and implementing the tools that he created for them.</p>

<h5>Our Vision</h5><p>An analogy that Brian Tracy uses in regards to goal setting is that “you cannot hit a
target that you can’t see.” It is therefore imperative that you sit down and decide exactly
what you really want, in every area of your life. To do so, ideally you should follow the
step-by-step system that Brian has created for you in this groundbreaking program. If
you want to gain its full benefits, we urge you to make full use of this guidebook along
with the audio segment to assist you in your goal-setting initiatives.</p>

<h5>Our Mission</h5><p>An analogy that Brian Tracy uses in regards to goal setting is that “you cannot hit a
audio session at least twice, ideally three times, and then work on the corresponding
guidebook chapter. Listening to the audio session several times allows it to sink into
your subconscious mind as you make more and more discoveries each time that you
listen. Be sure to keep a paper and pen in hand as you are listening to the program, and
be prepared to stop the program when you hear an idea or technique that particularly
appeals to you. Think about that idea in connection with your situation, your work,
your lifestyle, then prepare a plan to act upon it in the days ahead. You may wish to
create an “Ultimate Goal Setting” journal in which you can record your ideas, thoughts,
and insights.</p>

<div className = "row">
<div className = "col-sm-6"><h5>Our Bussiness Model</h5><p>Some of the guidebook contents are worded as questions that you should take some
time to respond to, while others are action steps that Brian suggests you take. Whether
a question or action step, you should jot down any thoughts or ideas that might arise
regarding the subject matter in the space provided. Taking the necessary action steps
that are outlined in this proven and highly effective program will give you a much
broader vision of who you really are and what is possible in your life.</p></div>

<div className = "col-sm-6"><img className="About_pic" src = {require('../Real_Estate/five.jpg')} alt = 'images' /><div href = "/portfolio" className = "smalls">Our Office</div></div>
</div>

<p className = 'move'>Whenever possible give yourself a deadline, and be committed to following through on
that deadline. Without implementing any of the action steps that you have mapped out
for yourself, this program simply becomes an exercise in listening. In order to gain the
full benefits that this valuable program has to offer you, make the decision here and
now to work through this program, and act upon your insights and strategies. By doing
so, you can transform once-vague concepts and ideas into concrete real-life experiences.
If you take the time to commit to this program now, you will undoubtedly reap
extraordinary rewards for many, many years to come.</p>
</div>
</Styl>
);




export default About;