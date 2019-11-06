import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Layout} from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import SignInAdmin from './Pages/SignInAdmin';
import Admin from './Pages/Admin';
import 	Portfolio1 from './Pages/Portfolio_Pages/Portfolio1';
import 	Portfolio2 from './Pages/Portfolio_Pages/Portfolio2';
import 	Portfolio3 from './Pages/Portfolio_Pages/Portfolio3';
import 	Portfolio4 from './Pages/Portfolio_Pages/Portfolio4';
import 	Portfolio5 from './Pages/Portfolio_Pages/Portfolio5';
import 	Portfolio6 from './Pages/Portfolio_Pages/Portfolio6';
import 	Portfolio7 from './Pages/Portfolio_Pages/Portfolio7';
import 	Portfolio8 from './Pages/Portfolio_Pages/Portfolio8';
import 	Portfolio9 from './Pages/Portfolio_Pages/Portfolio9';
import 	Portfolio10 from './Pages/Portfolio_Pages/Portfolio10';
import 	Portfolio11 from './Pages/Portfolio_Pages/Portfolio11';
import 	NoMatch from './Pages/NoMatch';
import 	MenuBar from './Components/MenuBar';
import {Footer} from './Components/Footer';

class App extends Component{

	render(){
		return(
			<>
			<Router>
			<MenuBar/>
			<Layout>
				<Switch>
				<Route path="/" exact component = {Home}/>
				<Route path="/about" exact component = {About}/>
				<Route path="/services" exact component = {Services}/>
				<Route path="/portfolio" exact component = {Portfolio}/>
				<Route path="/contact" exact component = {Contact}/>
				<Route path="/portfolio/portfolio1" exact component = {Portfolio1}/>
				<Route path="/portfolio/portfolio2" exact component = {Portfolio2}/>
				<Route path="/portfolio/portfolio3" exact component = {Portfolio3}/>
				<Route path="/portfolio/portfolio4" exact component = {Portfolio4}/>
				<Route path="/portfolio/portfolio5" exact component = {Portfolio5}/>
				<Route path="/portfolio/portfolio6" exact component = {Portfolio6}/>
				<Route path="/portfolio/portfolio7" exact component = {Portfolio7}/>
				<Route path="/portfolio/portfolio8" exact component = {Portfolio8}/>
				<Route path="/portfolio/portfolio9" exact component = {Portfolio9}/>
				<Route path="/portfolio/portfolio10" exact component = {Portfolio10}/>
				<Route path="/portfolio/portfolio11" exact component = {Portfolio11}/>
				<Route path = "/SignInAdmin" exact component = {SignInAdmin}/>
				<Route path = "/admin" exact component = {Admin}/>
				<Route component = {NoMatch}/>
				</Switch>
				</Layout>
			</Router>
			<Footer/>
			</>
		);
	}
}

export default App;
