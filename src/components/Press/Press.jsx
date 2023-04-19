import SectionHeader from '../SectionHeader';
import Button from '../Button';

import quotes from '../../images/quotes.png';
import './Press.scss';

export default function Press() {
    return (
        <section className="press">
            <SectionHeader text="press about us" />
            <div className="press__wrapper">
                <blockquote className="press__blockquote">
                    <img className="press__image" src={quotes} alt="quotes" />
                    <p className="press__text">
                        Today we had a tasting of something really new - craft kvass. 
                        <br />
                        Yes, yes, you heard right! 
                        <br />
                        Thanks to Ben and Dan for providing a whole barrel of their drink!
                    </p>
                </blockquote>
                <div className="press__buttons">
                    <Button 
                        classNames="button_press"
                        link="https://kvrdv.github.io/kvast/"
                        text="read more"
                    />
                    <p className="press__source">the new york times</p>
                </div>
            </div>
        </section>
    );
}