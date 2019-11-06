import React from 'react';
import {NavLink} from 'react-router-dom';
import SlideView from './Slider';

export const UnderHome = ()=>(
	
<div style = {{marginTop:'5vh',paddingRight: "20px", background:"gray"}}>
<div className = " row">
	<div className="col-sm-6 ho_img_cont" >
		<SlideView />
	</div>
	<div className="col-sm-6 ho_img_cont"> 
		<div className = "row">
		<div className="col-sm-12 tc clients">Some of Our Clients</div>
			<div className = "col-xl-4">
			<NavLink to = "/Portfolio/Portfolio1" className ="und_img_cont"><img className = "ho_img grow" src = {require('../Real_Estate/two.jpg')} alt = 'images' />
			<p className = "und_wo">Client 1</p></NavLink>
			</div>
			<div className = "col-xl-4">
			<NavLink to = "/Portfolio/Portfolio2" className ="und_img_cont"><img className = "ho_img grow" src = {require('../Real_Estate/three.jpg')} alt = 'images' />
			<p className = "und_wo">Client 2</p></NavLink>
			</div>
			<div className = "col-xl-4">
			<NavLink to = "/Portfolio/Portfolio3" className ="und_img_cont"><img className = "ho_img grow" src = {require('../Real_Estate/four.jpg')} alt = 'images' />
			<p className = "und_wo">Client 3</p></NavLink>
			</div>
		</div>
	</div>
</div>
</div>
)

