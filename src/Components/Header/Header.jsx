import React, { useEffect } from 'react';
import './header.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className="kk__header-image">
			<div className="kk__container">
				<div
					className="kk__header-container"
					data-aos="fade-up"
					data-aos-duration="3000"
				>
					<h3>the pleasure of tasting</h3>
					<h1>pakistani food</h1>
					<p>rediscover the place of flavor</p>
				</div>
			</div>
		</div>
	);
};

export default Header;
