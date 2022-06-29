import React, { useEffect } from 'react';
import './testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import person1 from '../../Asset/person1.png';
import person2 from '../../Asset/person2.png';
import person3 from '../../Asset/person3.png';
import person4 from '../../Asset/person4.png';
import person5 from '../../Asset/person5.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Testimonial = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<Swiper
			className="kk__testimonial-container"
			id="Testimonial"
			modules={[Pagination]}
			spaceBetween={20}
			slidesPerView={1}
			loop={true}
			pagination={{ clickable: true }}
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log('slide change')}
		>
			{/* <div className="kk__testimonial-image"></div> */}
			<SwiperSlide className="kk__testimonial-contain">
				<div className="kk__testimonial-people">
					<img src={person1} alt="" />
				</div>
				<div className="kk__testimonial-name">
					<h3>jet li</h3>
				</div>
				<div className="kk__testimonial-message">
					<p>
						"They have delicious Pakistani food! There’s a lot of choices and
						the service is really good. Their meats are halal. I recommend you
						guys to try their food!"
					</p>
				</div>
			</SwiperSlide>

			<SwiperSlide className="kk__testimonial-contain">
				<div className="kk__testimonial-people">
					<img src={person2} alt="" />
				</div>
				<div className="kk__testimonial-name">
					<h3>selena gomez</h3>
				</div>
				<div className="kk__testimonial-message">
					<p>
						"I can confidently say that this was THE BEST dining place. Loved
						the hospitality, friendly customer service and the delicious foods.
						The manager was so nice that he even offered us a free dessert and
						saffron tea. I would 100% recommend this place, you will definitely
						love it."
					</p>
				</div>
			</SwiperSlide>

			<SwiperSlide className="kk__testimonial-contain">
				<div className="kk__testimonial-people">
					<img src={person3} alt="" />
				</div>
				<div className="kk__testimonial-name">
					<h3>curtis jackson</h3>
				</div>
				<div className="kk__testimonial-message">
					<p>
						"Kolachi Kingdom fine dining is a superb Pakistani food. Their
						Chicken tikka boti and drinks are unique. Variety of teas and
						desserts are worth trying."
					</p>
				</div>
			</SwiperSlide>

			<SwiperSlide className="kk__testimonial-contain">
				<div className="kk__testimonial-people">
					<img src={person4} alt="" />
				</div>
				<div className="kk__testimonial-name">
					<h3>david guetta</h3>
				</div>
				<div className="kk__testimonial-message">
					<p>
						"10 stars! Best of the best!!! Order anything on their menu and you
						will not be disappointed."
					</p>
				</div>
			</SwiperSlide>

			<SwiperSlide className="kk__testimonial-contain">
				<div className="kk__testimonial-people">
					<img src={person5} alt="" />
				</div>
				<div className="kk__testimonial-name">
					<h3>Salman khan</h3>
				</div>
				<div className="kk__testimonial-message">
					<p>
						"Food and service are great. We have been working with them to plan
						our wedding reception because we love the atmosphere and food! It
						has been very easy to plan everything. I will update post after
						event to review their service and everything. So far very happy with
						the experience."
					</p>
				</div>
			</SwiperSlide>
		</Swiper>
	);
};

export default Testimonial;
