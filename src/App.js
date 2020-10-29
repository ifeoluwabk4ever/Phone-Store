import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Error from './components/Error';
import Modal from './components/Modal'


export default class App extends Component {
	render() {
		return (
			<>
			<Navbar />
			<Switch>
				<Route exact path="/" component={ProductList} />
				<Route exact path="/details" component={Details} />
				<Route exact path="/cart" component={Cart} />
				<Route component={Error} />
			</Switch>
			<Modal />
		</>
		)
	}
}
