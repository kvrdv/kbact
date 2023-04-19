import SectionHeader from '../SectionHeader';
import Product from '../Product';
import './Products.scss';
import baxterBottle from '../../images/bottle-left.jpg';
import pomantukBottle from '../../images/bottle-right.jpg';

export default function Products() {
    return (
        <section className="products">
            <SectionHeader text="products" />  

            <div className="products__products_wrapper">         
                <Product 
                    classNames="product_1"
                    name="baxter" 
                    image={baxterBottle}
                    dataAlc="0%"
                    dataKcal="35"
                    ingredients="Rye bread, Water, Malt, Salt"
                    features="Tart and powerful flavor will cheer you up after a hard day and give you energy!"
                    price="$150"
                />
                <Product 
                    classNames="product_2"
                    name="pomantuk" 
                    image={pomantukBottle}
                    dataAlc="0%"
                    dataKcal="27"
                    ingredients="Barley bread, Water, Malt, Orange"
                    features="Light and refreshing drink will help keep a great mood throughout the day!"
                    price="$130"
                />
            </div>
      </section>
    );
}