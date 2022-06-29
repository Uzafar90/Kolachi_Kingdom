import React, { useEffect } from 'react';
import './menu.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Menu = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div className="kk__menu-container" id="Menu">
			<div className="kk__container">
				<div className="kk__menu-heading" data-aos="fade-up">
					<h3>explore our amazing</h3>
					<h1>menu</h1>
				</div>
				<div className="kk__menu-itemLists">
					<div
						className="kk__menu-itemsA"
						data-aos="fade-left"
						data-aos-duration="3000"
					>
						<div className="kk__menu-gap">
							<div>
								<h2>Chicken Tikka Boti</h2>
								<p>
									Boneless chicken marinated with spices then grilled over
									charcoal.
								</p>
							</div>
							<div>
								<h4>$16</h4>
							</div>
						</div>
						<div className="kk__menu-gap">
							<div>
								<h2>Peshawari Beef Boti</h2>
								<p>Beef marinated with a special blend of spices.</p>
							</div>
							<div>
								<h4>$17</h4>
							</div>
						</div>
						<div className="kk__menu-gap">
							<div>
								<h2>Karahi Gosht</h2>
								<p>
									Tender meat pieces cooked in an open wok with tomatoes, touch
									of ginger and green chilies
								</p>
							</div>
							<div>
								<h4>$21</h4>
							</div>
						</div>
						<div className="kk__menu-gap">
							<div>
								<h2>Brain Masala</h2>
								<p>
									A traditional Pakistani delicacy, goat brain cooked with
									ginger, green peppers, and cilantro.
								</p>
							</div>
							<div>
								<h4>$21</h4>
							</div>
						</div>
					</div>
					<div
						className="kk__menu-itemsB"
						data-aos="fade-right"
						data-aos-duration="3000"
					>
						<div className="kk__menu-gap">
							<div>
								<h2>Tandoori Chicken</h2>
								<p>Marinated in yogurt and spices then cooked in a clay oven</p>
							</div>
							<div>
								<h4>$22</h4>
							</div>
						</div>
						<div className="kk__menu-gap">
							<div>
								<h2>Palak Paneer</h2>
								<p>
									A mild dish of curried spinach with tofu and blend of spices
								</p>
							</div>
							<div>
								<h4>$14</h4>
							</div>
						</div>
						<div className="kk__menu-gap">
							<div>
								<h2>Nihari</h2>
								<p>
									Special dish of Pakistan, and our specialty, chunk of beef
									mixed with spicy curry cooked overnight.
								</p>
							</div>
							<div>
								<h4>$14</h4>
							</div>
						</div>
						<div className="kk__menu-gap">
							<div>
								<h2>Chicken Biryani </h2>
								<p>
									Chicken marinated with tomatoes, green peppers, mint, onion,
									and cilantro cooked with basmati rice.
								</p>
							</div>
							<div>
								<h4>$14</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
