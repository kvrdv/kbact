import SectionHeader from '../SectionHeader';

import './Order.scss';

export default function Order() {
    return (
        <section className="order">
            <SectionHeader text="order" />  

            <div className="order__wrapper">
                <form action="https://kvrdv.github.io/kvast/" className="form">
                    <div className="form__field">
                        <label className="form__label" for="name">name</label>
                        <input className="form__input" type="text" name="name" />
                    </div>
                 
                    <div className="form__field">
                        <label className="form__label" for="tel-1">phone</label>
                        <input className="form__input" type="tel" name="tel" />
                    </div>
                    
                    <div className="form__field">
                        <label className="form__label" for="mail">email</label>
                        <input className="form__input" type="mail" name="mail" />
                    </div>

                    <div className="form__field">
                        <label className="form__label" for="volume">order value</label> <br />
                        <select className="form__select" name="volume">
                            <option className="form__option" value="value-1">10 barrel per week</option>
                            <option className="form__option" value="value-2">20 barrel per week</option>
                            <option className="form__option" value="value-3">30 barrel per week</option>
                        </select>
                    </div>

                    <div className="form__field">
                        <label className="form__label" for="info">comment</label>
                        <textarea className="form__textarea" name="info" rows="2"></textarea>
                    </div>

                    <div className="form__field">               
                        <label className="form__label form__label_checkbox" for="newsletter">I agree to receive the newsletter</label>
                        <input className="form__label_input" type="checkbox" name="newsletter" />
                    </div>

                    <input className="form__button" type="submit" value="Send order" />
                </form>
            </div>
        </section>
    );
}