import Button from '../Button';

import './Product.scss';

export default function Product({classNames, name, image, dataAlc, dataKcal, ingredients, features, price}) {
    return (
        <div className={`product ${classNames}`}>
            <h2 className="product__name">{name}</h2>
            <img className="product__image" src={image} alt="product" />

            <div className="product__values">
                <table className="product__values-table">
                    <tbody className="product__values-tbody">
                        <tr className="product__values-row">
                            <td className="product__values-data">alc</td>
                            <td className="product__values-data">{dataAlc}</td>
                        </tr>
                        <tr className="product__values-row">
                            <td className="product__values-data">kcal</td>
                            <td className="product__values-data">{dataKcal}</td>
                        </tr>
                    </tbody>
                </table>
                <p className="product__ingredients">{ingredients}</p>
            </div>

            <p className="product__features">{features}</p>
           
            <div className="product__buttons">
                <Button 
                    classNames="button_product-supplement"
                    link="https://kvrdv.github.io/kvast/#" 
                    text="nutrition facts"
                />
                <Button 
                    classNames="button_product-buy"
                    link="https://kvrdv.github.io/kvast/#" 
                    text="buy"
                />
                <span className="product__price">
                    <b>{price}</b>
                </span>
            </div>
        </div>
    );
}