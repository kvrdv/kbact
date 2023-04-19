import './Feature.scss';

export default function Feature({classNames, image, alt, header, text}) {
    return (
        <li className={`feature__item ${classNames}`}>
            <img className="feature__image" src={image} alt={alt} />
            <h3 className="feature__header">{header}</h3>
            <p className="feature__text">{text}</p>
        </li>
    );
}