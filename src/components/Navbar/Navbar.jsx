import './Navbar.scss';

export default function Navbar({ classNames }) {
	return (
		<nav className={`navbar ${classNames}`}>
			<ul className="navbar__list">
				<li className="navbar__item">
					<a
						href="#history"
						className="navbar__link"
					>
						history
					</a>
				</li>
				<li className="navbar__item">
					<a
						href="#manufacture"
						className="navbar__link"
					>
						manufacture
					</a>
				</li>
				<li className="navbar__item">
					<a
						href="#assortment"
						className="navbar__link"
					>
						assortment
					</a>
				</li>
				<li className="navbar__item">
					<a
						href="#shop"
						className="navbar__link"
					>
						shop
					</a>
				</li>
			</ul>
		</nav>
	);
}
