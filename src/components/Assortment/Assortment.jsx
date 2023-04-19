import SectionHeader from '../SectionHeader';

import './Assortment.scss';

export default function Assortment() {
    const tableHeaders = ['name', 'alc', 'kcal', 'volume', 'price'];

    const tableData = [
        {
            name: 'classic',
            alc: '0%',
            kcal: '33',
            volume: '330ml',
            price: '$120',
        },
        {
            name: 'shabash',
            alc: '0%',
            kcal: '45',
            volume: '330ml',
            price: '$170',
        },
        {
            name: 'baxter',
            alc: '0%',
            kcal: '35',
            volume: '500ml',
            price: '$150',
        },
        {
            name: 'pomantuk',
            alc: '0%',
            kcal: '27',
            volume: '500ml',
            price: '$130',
        },
    ];

    const randomKey = (() => (Math.random() + 1).toString(36).substring(7));

    return (
        <section className="assortment">
            <SectionHeader text="assortment" />
            <div className="assortment__wrapper">               
                <table className="assortment__table">
                    <thead className="assortment__thead">
                        <tr className="assortment__headers">
                            {tableHeaders.map((header) => (
                                <th key={randomKey()} className="assortment__header">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="assortment__tbody">
                        {tableData.map(data => (                          
                            <tr key={randomKey()} className="assortment__datas">
                                <td className="assortment__data assortment__data-1">{data.name}</td>
                                <td className="assortment__data assortment__data-2">{data.alc}</td>
                                <td className="assortment__data assortment__data-3">{data.kcal}</td>
                                <td className="assortment__data assortment__data-4">{data.volume}</td>
                                <td className="assortment__data assortment__data-5">{data.price}</td>
                            </tr>                                                    
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}