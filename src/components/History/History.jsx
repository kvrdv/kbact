import SectionHeader from '../SectionHeader';
import Story from '../Story';

import storyImage1 from '../../images/wiki-1.png';
import storyImage2 from '../../images/wiki-2.png';
import './History.scss';

export default function History() {
    return (
        <section className="history">
            <SectionHeader text="history" />
            <div className="history__wrapper">               
                <Story
                    classNames="story_1"
                    name="the origin"
                    link="https://kvrdv.github.io/kvast/"
                    source="Wikipedia"
                    text={`
                        Kvass in Russia appeared in the X-XI centuries. 
                        The word kvass itself is also of Old Russian origin. 
                        Apart from Russia kvass is prepared in Belarus, Serbia, Macedonia, Slovakia 
                        and many other countries, but it is called everywhere the same - kvass
                    `}
                    image={storyImage1}
                    alt="kvass composition"
                />
                <Story
                    classNames="story_2"
                    name="classification"
                    link="https://kvrdv.github.io/kvast/"
                    source="Wikipedia"
                    text={`
                        According to Russian GOST for industrial production is a beverage with 
                        a volume fraction of ethyl alcohol not It is a beverage made as a result 
                        of unfinished alcoholic and lactic fermentation of wort
                    `}
                    image={storyImage2}
                    alt="kvass composition"
                />                
            </div>
        </section>
    );
}