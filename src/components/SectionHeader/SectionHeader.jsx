import './SectionHeader.scss';

export default function SectionHeader({className, text}) {
    return (
        <div className="section-header__wrapper">
            <h1 className={`section-header ${className}`}>{text}</h1>
        </div>
    );
}