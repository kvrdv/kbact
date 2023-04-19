import './Icon.scss';

export default function Icon({classNames, link, image, alt}) {
    return (
        <a className={`icon ${classNames}`} href={link}>
            <img src={image} alt={alt} />
        </a>
    );
}