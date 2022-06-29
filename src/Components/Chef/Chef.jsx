import React, { useEffect } from 'react';
import './chef.css';
import chef from '../../Asset/chef img.jpeg';
import sign from '../../Asset/sign.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Chef = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div className="kk__container" id="Chef">
			<div className="kk__chef-container">
				<div className="kk__chef-image" data-aos="fade-up">
					<img src={chef} alt="chef img" />
				</div>
				<div
					className="kk__chef-content"
					data-aos="fade-left"
					data-aos-duration="3000"
				>
					<h3>meet our amazing</h3>
					<h1>chef</h1>
					<p>
						<span>“</span> I've been a cook all my life, but I am still learning
						to be a good chef. I'm always learning new techniques and improving
						beyond my own knowledge because there is always something new to
						learn and new horizons to discover.
					</p>
					<div className="chef-name">
						<p>Muhammad Irshad</p>
						<span>
							<strong> founder & chef</strong>
						</span>
					</div>
					<div className="chef-sign">
						<img src={sign} alt="signature" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Chef;
