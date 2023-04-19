import Feature from '../Feature';

import featureImage1 from '../../images/icon-brew.png';
import featureImage2 from '../../images/icon-matreshka.png';
import featureImage3 from '../../images/icon-thumbsup.png';
import './Features.scss';

export default function Features() {
    return (
        <section className="features">
            <ul className="features__list">  
                <Feature
                    classNames='feature-item_1'
                    image={featureImage1} 
                    alt='brew' 
                    header='We boil it ourselves'
                    text='With these hands. Experiment and make whatever we want'
                />  
                <Feature 
                    classNames='feature-item_2'
                    image={featureImage2} 
                    alt='matreshka'
                    header='Our own and native'
                    text='Not for profit, but for import substitution. We raise production'
                />            
                <Feature 
                    classNames='feature-item_3'
                    image={featureImage3}
                    alt='thumbsup'
                    header='No economy'
                    text='A man is what he eats and drinks. We have only quality ingredients'
                /> 
            </ul>
        </section>
    );
}