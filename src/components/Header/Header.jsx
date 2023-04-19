import Navbar from '../Navbar';
import MainLogo from '../MainLogo';
import './Header.scss';

export default function Header() {
    return (
        <header className="header">
            <MainLogo classNames="main-logo_header" />
            <Navbar classNames="navbar_header" />

            <p className="header__tagline">
                craft drinks
                <br />
                for
                <br />
                everybody!
            </p>
        </header>
    );
}