import './MainLogo.scss';
import mainLogo from '../../images/logo.png';

export default function MainLogo({classNames}) {
    return (
        <img className={`main-logo ${classNames}`} src={mainLogo} alt="kbact logo" />
    );
}