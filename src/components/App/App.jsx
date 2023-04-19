import Header from '../Header';
import Products from '../Products';
import Features from '../Features';
import History from '../History';
import Press from '../Press';
import Assortment from '../Assortment';
import Order from '../Order';
import Footer from '../Footer';

import './App.scss';

export default function App() {
    return (
        <div className="app">
            <Header />
            <Products />
            <Features />
            <History />
            <Press />
            <Assortment />
            <Order />
            <Footer />
        </div>      
    );
}