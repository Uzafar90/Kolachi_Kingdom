import React from 'react';
import './app.css';
import {
	Navbar,
	Header,
	About,
	Menu,
	Picture,
	Chef,
	Testimonial,
	Reservation,
	Footer,
} from './Components';

const App = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<About />
			<Menu />
			<Picture />
			<Chef />
			<Testimonial />
			<Reservation />
			<Footer />
		</div>
	);
};

export default App;
