import './css/MainPanel.css'

import qiqi from './images/thom-milkovic-skUTVJi8-jc-unsplash.jpg'
import lily from './images/thom-milkovic-skUTVJi8-jc-unsplash.jpg'

function MainPanel() {
    return (
        
        <div className="panels">
            <div className=" panel">                    
                <img  
                    src={qiqi}
                    className="panel__pic panel__pic1"
                    alt="a gray color cat with big eyes is staring at the front"
                />
                <div className="panel__content">
                    <h2 className="panel__title">Long Time Internet Subjects</h2>                    
                    <p className="panel__text">The picture in this card is about a gray color cat with big eyes is staring at the front. Its name is Leo. </p>
                    <p className="panel__text">It is a docile little kitten. It doesn’t like to lose its temper, and It doesn’t like to scratch or bite people.</p>
                    <p className="panel__text"> It has soft fur and unique charm..It likes to squint its eyes to enjoy the warmth of the sun, and also likes to show off my elegance. It likes to eat and try a variety of foods! </p>
                </div>
            </div>
            <div className="panel">
                <img className="panel__pic panel__pic2" src={lily} alt="a gray color cat with big eyes is staring at the front"/>
                <div className="panel__content">
                    <h2 className="panel__title">Long Time Internet Kings</h2>                    
                    <p className="panel__text">The picture in this card is about a small white cat with blue eyes has its paws on the gray blanket and looks diagonally upward. Its name is Oliver, and it has soft fur and unique charm.</p>
                    <p className="panel__text"> It is a cat with strong curiosity and intelligence. Cats have certain basic needs which often divide the difference between a stray on the street and a cat in a home with a responsible caregiver.</p>
                    <p className="panel__text">It can always learn various little skills and explore every little corner. No secret in your home can escape his eyes.</p>
                    </div>                    
            </div>
        </div> 
    
    );
}
export default MainPanel;