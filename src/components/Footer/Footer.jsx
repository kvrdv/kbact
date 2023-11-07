import MainLogo from '../MainLogo';
import Navbar from '../Navbar';
import Icon from '../Icon';

import instagramIcon from '../../images/icon-insta.png';
import facebookIcon from '../../images/icon-fb.png';
import vkIcon from '../../images/icon-vk.png';
import githubIcon from '../../images/icon-github.png';
import './Footer.scss';

export default function Footer() {
	return (
		<footer className="footer">
			<MainLogo classNames="main-logo_footer" />
			<Navbar classNames="navbar_footer" />
			<div className="footer__icons">
				<Icon
					classNames="icon_instagram"
					image={instagramIcon}
					alt="instagram"
				/>
				<Icon
					classNames="icon_facebook"
					image={facebookIcon}
					alt="facebook"
				/>
				<Icon classNames="icon_vk" image={vkIcon} alt="vk" />
			</div>
			<p className="footer__tagline">
				Please noticed!
				<br />
				This is a demonstration website.
				<br />
				The product described is fictitious.
				<br />
				You cannot place an order.
			</p>
			<div className="footer__authors">
				<Icon
					classNames="icon_github"
					link="https://github.com/kovardaev"
					image={githubIcon}
					alt="author"
				/>
				<div className="footer__authors-wrapper">
					<a
						className="footer__author"
						href="https://github.com/kovardaev"
					>
						Made by Kovardaev <br />
					</a>
				</div>
			</div>
		</footer>
	);
}
