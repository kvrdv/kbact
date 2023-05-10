import {useState} from 'react';

import SectionHeader from '../SectionHeader';

import './Assortment.scss';

export default function Assortment() {
    const [items, setItems] = useState([
        {
            name: 'classic',
            alc: '0%',
            kcal: '33',
            volume: '330ml',
            price: '$120',
            order: 1
        },
        {
            name: 'shabash',
            alc: '0%',
            kcal: '45',
            volume: '330ml',
            price: '$170',
            order: 2
        },
        {
            name: 'baxter',
            alc: '0%',
            kcal: '35',
            volume: '500ml',
            price: '$150',
            order: 3
        },
        {
            name: 'pomantuk',
            alc: '0%',
            kcal: '27',
            volume: '500ml',
            price: '$130',
            order: 4
        },
    ]);

    const tableHeaders = Object.keys(items[0]);

    const [currentItem, setCurrentItem] = useState(null);

    function dragStartHandler(event, element) {   
        // setCurrentItem(element);
        // console.log('DRAG currentItem', currentItem);
    }

    function dragLeaveHandler(event) {
        console.log('dragLeave');

        
    }
    function dragEndHandler(event) {
        // event.target.style.background = 'white';
    }
    function dragOverHandler(event) {
        // event.preventDefault();      
        // event.target.style.background = 'lightgray';
    }
    function dropHandler(event, element) { 
        // event.preventDefault();

        console.log('DROP', element);
         
        setItems(items.map(item => {
            if (item.id === element.id) {
                return {...item, order: currentItem.order}
            }

            if (item.id === currentItem.id) {
                return {...item, order: element.order}
            }
            return item;
        }));
        event.target.style.background = 'white';
    }

    const sortItems = (a, b) => {
        if (a.order > b.order) {
            return 1;
        } else {
            return -1;
        }
    }

    return (
        <section className="assortment">
            <SectionHeader text="assortment" />
            <div className="assortment__wrapper">               
                <table className="assortment__table">
                    <thead className="assortment__thead">
                        <tr className="assortment__headers">
                            {tableHeaders.map((element, i) => (
                                <th key={i} className="assortment__header">{element}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="assortment__tbody">
                        {items.sort((a, b) => (a.order - b.order)).map((element, i) => (                          
                            <tr 
                                key={i} 
                                className="assortment__datas"
                                draggable={true}
                                onDragStart={(event) => dragStartHandler(event, element)}
                                onDragLeave={(event) => dragLeaveHandler(event)}
                                onDragEnd={(event) => dragEndHandler(event)}
                                onDragOver={(event) => dragOverHandler(event)}
                                onDrop={(event) => dropHandler(event, element)}
                            >
                                <td className="assortment__data assortment__data-1">{element.name}</td>
                                <td className="assortment__data assortment__data-2">{element.alc}</td>
                                <td className="assortment__data assortment__data-3">{element.kcal}</td>
                                <td className="assortment__data assortment__data-4">{element.volume}</td>
                                <td className="assortment__data assortment__data-5">{element.price}</td>
                            </tr>                                                    
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}