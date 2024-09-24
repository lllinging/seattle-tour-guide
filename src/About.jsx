import './css/About.css';

import './css/About.css';

import aboutUs from './images/alex-azabache-V83v-MYB_Z8-unsplash.jpg';
import hiring from './images/dakota-corbin-xh4mG4cqHGg-unsplash.jpg';

function About() {
    return (
        <div className="abouts">
            <div className=" about">                    
                <img  
                    src={aboutUs}
                    className="about__pic about__pic1"
                    alt="parked-white-bicycle"
                />
                <div className="about__content">
                    <h2 className="about__title">About us</h2>                    
                    <p className="about__text">"L's Seattle" is a start up company based in Seattle, Washington. Dedicated to tourism services in and around Seattle, L's Seattle has built a strong responsibility for customer's satisfaction and safety. </p>
                    <p className="about__text"> With a commitment to excellence and customer satisfaction, the company strives to offer a variety of options for customer to choose from and satisfy a number of requirements from customers. </p>
                    <p className="about__text">Whether it's it is a start up company, L's Seattle is very excellent to provide high level of sevice and solutions tailored to meet the needs of its clients. If any of you are interested in us, please not hesitate to contact us.</p>
                </div>
            </div>
            <div className="about">
                <img 
                    className="about__pic about__pic2" 
                    src={hiring} 
                    alt="woman-walking-beside-wall-with-the-best-gift-is-you-graffiti"
                />
                <div className="about__content">
                    <h2 className="about__title">Join us now!</h2>                    
                    <p className="about__text">Are you a passionate traveler with a knack for communication and planning? Do you thrive on creating unforgettable experiences for others? If you have a wealth of travel knowledge, particularly about Seattle, and a keen interest in the tourism service industry, then we want you to join our team!</p>
                    <p className="about__text">As a member of our team, you'll have the opportunity to leverage your extensive travel experience to craft personalized itineraries and adventures for our customers. Your understanding of Seattle's hidden gems and local attractions will be invaluable in curating unforgettable experiences for travelers from around the world.</p>
                    <p className="about__text"> If you're ready to turn your passion for travel into a rewarding career and help us redefine the tourism industry, we invite you to join us. Together, we'll bring the magic of travel to life and create unforgettable memories for our clients. Apply now and be part of an exciting journey! </p>
                   
                </div>                    
            </div>
        </div> 


                  
         
    );
}
export default About;