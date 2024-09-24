import './css/PlanItem.css';

//paramter: plans, get place, departureTime, Duration, ticketPrice, features from plans
function PlanItem({plans}) {
    const list = plans.map((plan, index) => {
        return (
            <div className="plan__box" key={index}>
                <p className="plan__item plan__place">Place: {plan.place}</p>
                <p className="plan__item">Departure Time: {plan.departureTime}</p>
                <p className="plan__item">Duration: {plan.Duration}</p>
                <p className="plan__item">Ticket Price: {plan.ticketPrice}</p>
                <p className="plan__item plan__features">Features: {plan.features}</p>
            </div>
        );
    });             

    return (
        <div className="plans__container">
            <div id="mainContent" className="plan__description">
                {list}
            </div>
        </div>
    );
}   

export default PlanItem;