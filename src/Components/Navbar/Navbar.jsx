import React, { useEffect } from 'react';
import './navbar.css';
import whiteLogo from '../../Asset/White logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle('responsive_nav');
	};
	return (
		<div className="kk__container">
			<div className="kk__navbar-container">
				<div className="kk__navbar-logo logo" data-aos="fade-right">
					<img src={whiteLogo} alt="logo" />
				</div>
				<div
					className="kk__navbar-links"
					ref={navRef}
					onClick={showNavbar}
					data-aos="zoom-in"
				>
					<a href="#Home">Home</a>
					<a href="#About">About</a>
					<a href="#Menu">Menu</a>
					<a href="#Chef">Chef</a>
					<a href="#Testimonial">Testimonial</a>
					<button className="btn-close">
						<FaTimes />
					</button>
				</div>
				<div className="kk__navbar-button" data-aos="fade-left">
					<a href="#Reservation" className="btn">
						Reservation
					</a>
				</div>
				<button className="nav-btn" onClick={showNavbar}>
					<FaBars />
				</button>
			</div>
		</div>
	);
};

export default Navbar;
