import './Story.scss';

export default function Story({classNames, name, link, source, text, image, alt}) {
    return (
        <div className={`story ${classNames}`}>
            <div className="story__header">
                <h3 className="story__name">{name}</h3>                               
                <a className="story__link" href={link}>{`source: ${source}`}</a>             
            </div>
            <div className="story__content">
                <p className="story__text">{text}</p>
                <img className="story__image" src={image} alt={alt}/>
            </div>
        </div>
    );
};