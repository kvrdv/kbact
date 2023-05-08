import {useState, useEffect} from 'react';
import SectionHeader from '../SectionHeader';
import './Order.scss';

export default function Order() {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const storedFormData = JSON.parse(localStorage.getItem('KBACT_APP'));       
        if (storedFormData !== null) {
            setFormData(JSON.parse(JSON.stringify(storedFormData)));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('KBACT_APP', JSON.stringify(formData));
    }, [formData]);

    function handlerChange(event) {
        const {name, value, type, checked} = event.target;

        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value,
            };
        });
    }

    function handlerSubmit(event) {
        event.preventDefault();      
        // submitToApi(formData);

        setFormData({
            name: '',
            tel: '',
            mail: '',
            volume: '',
            comment: '',
            newsletter: true
        });

        alert("Your request has been sent, we will contact with you soon, thank you!");
    } 

    return (
        <section className="order">
            <SectionHeader text="order" />  

            <div className="order__wrapper">
                <form 
                    action="https://kvrdv.github.io/kvast/" 
                    className="form" 
                    onSubmit={handlerSubmit}
                >
                    <div className="form__field">
                        <label className="form__label" htmlFor="name">name</label>
                        <input 
                            className="form__input"                             
                            type="text" 
                            name="name" 
                            placeholder="Dale Cooper"
                            onChange={handlerChange}      
                            value={formData.name}
                            required
                        />
                    </div>
                 
                    <div className="form__field">
                        <label className="form__label" htmlFor="tel-1">phone</label>
                        <input 
                            className="form__input" 
                            type="tel"
                            name="tel" 
                            placeholder="+ 1 (234) 567-89-10"
                            onChange={handlerChange}      
                            value={formData.tel}
                            required
                        />
                    </div>
                    
                    <div className="form__field">
                        <label className="form__label" htmlFor="mail">email</label>
                        <input 
                            className="form__input" 
                            type="mail" 
                            name="mail" 
                            placeholder="cherry@pie.com"
                            onChange={handlerChange}      
                            value={formData.mail}
                            required
                        />
                    </div>

                    <div className="form__field">
                        <label className="form__label" htmlFor="volume">order value</label> <br />
                        <select 
                            className="form__select" 
                            name="volume"
                            value={formData.volume}
                            onChange={handlerChange}
                            required
                        >       
                            <option className="form__option" value="value-0">Other</option>                  
                            <option className="form__option" value="value-1">10 barrel per week</option>
                            <option className="form__option" value="value-2">20 barrel per week</option>
                            <option className="form__option" value="value-3">30 barrel per week</option>                           
                        </select>
                    </div>

                    <div className="form__field">
                        <label className="form__label" htmlFor="comment">comment</label>
                        <textarea 
                            className="form__textarea" 
                            name="comment" 
                            rows="2"
                            value={formData.comment}
                            placeholder="Additional information"
                            onChange={handlerChange}
                        />                   
                    </div>

                    <div className="form__field">               
                        <label 
                            className="form__label form__label_checkbox" 
                            htmlFor="newsletter"
                        >
                            I agree to receive the newsletter
                        </label>
                        <input 
                            className="form__label_input" 
                            type="checkbox" 
                            name="newsletter" 
                            checked={formData.newsletter}
                            onChange={handlerChange}
                        />
                    </div>

                    <input className="form__button" type="submit" value="Send order" />
                </form>
            </div>
        </section>
    );
}