import React, { useEffect } from 'react';
import './picture.css';
import picture1 from '../../Asset/photos1.jpeg';
import picture2 from '../../Asset/photos2.jpeg';
import picture4 from '../../Asset/photos4.jpeg';
import picture7 from '../../Asset/photo7.jpeg';
import picture8 from '../../Asset/photo8.jpeg';
import picture9 from '../../Asset/photo9.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const picture = () => {
	return (
		<div className="kk__picture-container">
			<div className="kk__picture-content">
				<div className="kk__picture-images" data-aos="zoom-in">
					<img src={picture1} alt="image1" />
				</div>
				<div className="kk__picture-images" data-aos="zoom-in">
					<img src={picture2} alt="image2" />
				</div>

				<div className="kk__picture-images" data-aos="zoom-in">
					<img src={picture4} alt="image4" />
				</div>

				<div className="kk__picture-images" data-aos="zoom-in">
					<img src={picture7} alt="image7" />
				</div>
				<div className="kk__picture-images" data-aos="zoom-in">
					<img src={picture8} alt="image8" />
				</div>
				<div className="kk__picture-images" data-aos="zoom-in">
					<img src={picture9} alt="image9" />
				</div>
			</div>
		</div>
	);
};

export default picture;
