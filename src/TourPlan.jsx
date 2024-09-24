
import './css/TourPlan.css';

function TourPlan({ rowSpan, days, location, departureTime, Duration, ticketPrice, features}) {

    

    return (
        <div className="tour-plan">
           {/* a tour plan table including days, location,   last hours, begin date, tickets,features */}
              <h2 className="tour-plan__title">Tour Plan</h2>
                <table className="tour-plan__table">
                    <thead>
                        <tr>
                            <th>Days</th>
                            <th>Place</th>
                            <th>Departure Time</th>
                            <th>Duration</th>
                            <th>Ticket Price</th>
                            <th>Features</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={rowSpan}>{days}</td>
                            <td>{location}</td>
                            <td>{departureTime}</td>
                            <td>{Duration}</td>
                            <td>{ticketPrice}</td>
                            <td>{features}</td>
                        </tr>                    
                    </tbody>
                </table>

        </div>
    );
}