import './css/Card.css';
import Button from './Button';

function Card({
    className, onReadMore, setServicePage,
    title, price, alt, pic, onClick, children,
    date, language, days, features, linkText,
    
}) {
    return (
        <div className={className}>
            <h2 className={`${className}__title`}>{title}</h2>
            <img className={`${className}__pic`}
                alt={alt}
                src={pic}
            />
            <div className="card__text">
                <p className={`${className}__price`}><span className="card__label">Price:</span> {price}</p>
                <p className={`${className}__date`}><span className="card__label">Date:</span> {date}</p>
                <p className={`${className}__language`}><span className="card__label">Language:</span> {language}</p>
                <p className={`${className}__days`}><span className="card__label">Days:</span> {days}</p>
                <p className={`${className}__text`}><span className="card__label">Features:</span> {features} <a href="" onClick={onClick}>{linkText}</a>
                </p>
            </div>
            <Button className={`${className}__link`}
                // onClick={ onReadMore}
                onClick={(e) => {
                    setServicePage(title);
                    console.log(e.target.innerText)
                }}
                aria-label={`Read More about ${title}`}
                type="button"
                visual="button"
                children={children}
            />
            
        </div>
    )
}
export default Card;