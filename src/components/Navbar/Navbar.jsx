import './Navbar.scss';

export default function Navbar({classNames}) {
    return (
        <nav className={`navbar ${classNames}`}>
            <ul className="navbar__list">
                <li className="navbar__item"><a href="https://kvrdv.github.io/kvast/" className="navbar__link">history</a></li>
                <li className="navbar__item"><a href="https://kvrdv.github.io/kvast/" className="navbar__link">manufacture</a></li>
                <li className="navbar__item"><a href="https://kvrdv.github.io/kvast/" className="navbar__link">assortment</a></li>
                <li className="navbar__item"><a href="https://kvrdv.github.io/kvast/" className="navbar__link">shop</a></li>
            </ul>
        </nav>
    );
}