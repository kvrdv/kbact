import './Button.scss';

export default function Button({classNames, link, text}) {
    return (
        <a className={`button ${classNames}`} href={link}>
            {text}
        </a>
    );
}