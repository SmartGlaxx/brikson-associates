import React from 'react';
import '../style/style.css';
// import {BrowserRouter as Router, Link} from 'react-router-dom';
// import Router from 'react-router-dom/Router';
import styled from 'styled-components';

const Styl = styled.div`
.co{
	color:dimgray;
	text-align:center;
}
p{
	font-size: 20px;
	font-family: oxygen
}
.w{
font-size:30px;
}
.move{
	animation: move 2s;
	text-align:justify;
	height:45vh;
	// background:rgba(50,40,30,0.5);
	// color:white;
}

`;
const Contact = () =>(
<Styl>
<div className ="move">
<h3 className ="co">Contact Us</h3>
<p className = "tc"><span className = "w">W</span>e'd love to hear from yo. Please contact us on.</p>
<p className = "tc"><i className ='fa fa-phone fa-1x'></i> +234 810-942-0046</p>
<p className = "tc"><i className ='fa fa-envelope fa-1x'></i> chukuemeka-be@gmail.com</p>

<p className = "tc"><i className ='fa fa-map-marker fa-1x'></i> No 13 Edede Street,<br/>
Off Douglass Road,<br/>
Owerri,<br/>
Imo State.</p>
</div>

</Styl>
);




export default Contact;