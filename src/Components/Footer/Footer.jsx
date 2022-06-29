import React from 'react';
import './footer.css';
import blackLogo from '../../Asset/Black logo.png';
const Footer = () => {
	return (
		<div className="kk__footer-container">
			<div className="kk__footer-content">
				<div className="kk__footer-logo">
					<img src={blackLogo} alt="logo" />
					<p>rediscover the place of flavor</p>
				</div>
				<div className="kk__footer-social">
					<a href="https://www.facebook.com" target="_blank">
						FACEBOOK
					</a>
					<a href="https://www.twitter.com" target="_blank">
						TWITTER
					</a>
					<a href="https://www.Instagram.com" target="_blank">
						INSTAGRAM
					</a>
					<a href="https://www.linkedin.com" target="_blank">
						LINKEDIN
					</a>
				</div>
				<div className="kk__footer-copyright">
					<small>
						Copyright &copy; Kolachi Kingdom (Project by Utba Zafar)
					</small>
				</div>
			</div>
		</div>
	);
};

export default Footer;
