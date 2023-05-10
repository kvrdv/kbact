import {useState} from 'react';

import SectionHeader from '../SectionHeader';
import Story from '../Story';

import './History.scss';

export default function History() {
    const [sort, setSort] = useState('none');

    const sortMethods = { 
        none: {method: (a, b) => null},      
        chronological: {method: (a, b) => (a - b)},
        reverse: {method: (a, b) => (a > b ? -1 : 1)}
    }; 

    const stories = [
        {
            id: '1',
            classNames: 'story_1',
            name: 'part 1',
            link: 'https://en.wikipedia.org/wiki/Kvass',
            source: 'Wikipedia',
            text: 'The exact origins of kvass are unclear, and whether it was invented by Slavic people or any other Eastern European ethnicity is unknown, although some Polish sources claim that kvass was invented by Slavs. Kvass has existed in the northeastern part of Europe, where grain production is thought to have been insufficient for beer to become a daily drink. It has been known among the Early Slavs since the 10th century.',
            image: require('../../images/wiki-1.png'),
            alt: 'kvass composition'
        },
        {
            id: '2',
            classNames: 'story_2',
            name: 'part 2',
            link: 'https://en.wikipedia.org/wiki/Kvass',
            source: 'Wikipedia',
            text: 'The first written mention of kvass is found in the Primary Chronicle, describing the celebration of Vladimir the Great\'s baptism in 996 when kvass along with mead and food was given out to the citizens of Kiev. Kvass-making remained a daily household activity well into the 19th century.',
            image: require('../../images/wiki-2.png'),
            alt: 'kvass composition'
        },
        {
            id: '3',
            classNames: 'story_3',
            name: 'part 3',
            link: 'https://en.wikipedia.org/wiki/Kvass',
            source: 'Wikipedia',
            text: 'In the second half of the 19th century, with military engagement, increasing industrialization and large-scale projects, such as the construction of the Trans-Siberian Railway, created a growing need to supply large numbers of people with foodstuff for extended periods of time, commercial kvass producers began appearing in the Russian Empire. Many of them specialised in the use of different raw ingredients, and more than 150 kvass varieties, such as apple, pear, mint, lemon, chicory, raspberry and cherry kvass, are recorded.',
            image: require('../../images/wiki-1.png'),
            alt: 'kvass composition'
        },
        {
            id: '4',
            classNames: 'story_4',
            name: 'part 4',
            link: 'https://en.wikipedia.org/wiki/Kvass',
            source: 'Wikipedia',
            text: 'In the second half of the 19th century, with military engagement, increasing industrialization and large-scale projects, such as the construction of the Trans-Siberian Railway, created a growing need to supply large numbers of people with foodstuff for extended periods of time, commercial kvass producers began appearing in the Russian Empire. Many of them specialised in the use of different raw ingredients, and more than 150 kvass varieties, such as apple, pear, mint, lemon, chicory, raspberry and cherry kvass, are recorded.',
            image: require('../../images/wiki-2.png'),
            alt: 'kvass composition'
        }
    ];  

    return (
        <section className="history">
            <SectionHeader text="history" />
            <div className="history__wrapper">          
                <select 
                    defaultValue={'none'} 
                    onChange={(event) => setSort(event.target.value)}
                    className='history__select'
                >                  
                    <option value="none" disabled>None</option>
                    <option value="chronological">Chronological</option>
                    <option value="reverse">Reverse</option>
                </select>

                {stories.sort(sortMethods[sort].method).map((element, i) => (
                    <Story
                        key={i}
                        id={element.id}
                        classNames={element.classNames}
                        name={element.name}
                        link={element.link}
                        source={element.source}
                        text={element.text}
                        image={element.image}
                        alt={element.alt}
                    />
                ))}
            </div>
        </section>
    );
}