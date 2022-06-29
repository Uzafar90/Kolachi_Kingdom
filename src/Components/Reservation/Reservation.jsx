import React, { useEffect } from 'react';
import './reservation.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Reservation = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div className="kk__container">
			<div className="kk__reservation-container" id="Reservation">
				<div className="kk__reservation-content" data-aos="fade-right">
					<h3>please join us</h3>
					<h1>reservation</h1>
					<p>
						We guarantee best Pakistani cuisine catering service whether you're
						planning an intimate Family Party or a Corporate Meeting. We use
						100% Zabiha halal meat and quality ingredients to prepare fresh
						aromatic food items to make your event memorable.
					</p>
				</div>
				<div className="kk__reservation-form" data-aos="fade-left">
					<form
						action="https://formsubmit.co/d2d684d353f392350c496eb73486269f"
						method="POST"
					>
						<input
							className="form"
							type="text"
							name="Name"
							placeholder="Full Name"
							required
						/>
						<input
							className="form"
							type="email"
							name="Email"
							placeholder="Email"
							required
						/>
						<input
							className="form"
							type="tel"
							name="phone"
							placeholder="Phone"
							pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
							required
						/>

						<button className="reserve-btn" type="submit">
							Book
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Reservation;
