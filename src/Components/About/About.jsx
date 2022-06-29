import React, { useEffect } from 'react';
import './about.css';
import chbir from '../../Asset/chicken biryani img.jpeg';
import grill from '../../Asset/grill img.jpeg';
import cooking from '../../Asset/cooking img.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div className="kk__container">
			<div className="kk__about-top-container">
				<div
					className="kk__about-contain"
					data-aos="fade-right"
					data-aos-duration="3000"
				>
					<h3>discover more about</h3>
					<h1>our story</h1>
					<p>
						Welcome to Kolachi Kingdom, the home of authentic Pakistani cuisine.
						We are proud to serve traditional Pakistani cuisine with a
						delectable menu which offers authentic traditional flavors. Our goal
						is to provide the best food experience to our customers. Our
						extended menu provides a variety of food ranging from traditional,
						Barbecue, fast-food and kid-friendly items. We ensure to prepare our
						food items with top-quality ingredients and Zabiha Halal meat.
					</p>
				</div>
				<div className="kk__about-top-images" data-aos="fade-up">
					<img src={chbir} alt="chicken biryani" />
					<img src={grill} alt="grill" />
				</div>
			</div>
			<span id="About"></span>
			<div className="kk__about-bottom-container">
				<div className="kk__about-bottom-images" data-aos="fade-down">
					<img src={cooking} alt="chef cooking" />
				</div>
				<div
					className="kk__about-contain"
					data-aos="fade-left"
					data-aos-duration="3000"
				>
					<h3>true passion for</h3>
					<h1>cooking</h1>
					<p>
						Kolachi Kingdom is a premium dine-in experience you’ll remember.
						With our newly constructed state-of-the-art heated outdoor patio, we
						cater to the increasing popularity of our traditional Pakistani,
						Fast Food menu of Gourmet Steaks, Burgers, and Matka specialties
						that leave you craving for more!
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
