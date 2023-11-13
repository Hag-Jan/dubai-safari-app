import { useParams } from "react-router-dom";
import { toursList } from "../../data";
import "./single-tour.css"
import Rating from "../../components/tours/Rating";

const SingleTour = () => {
    const { id } = useParams()

    const tour = toursList.find(t => t.id === +id) //parseInt == +id
    console.log(tour)

    return (
        <section className="tour">
            <div className="tour-step">
                United Arab Emirates <i className="bi bi-chevron-right"></i>
                Things to do Dubai <i className="bi bi-chevron-right"></i>
            </div>
            <div className="tour-category">ADVENTURE</div>
            <h1 className="tour-title">Dubai: {tour.title}</h1>
            <div className="tour-info">
                <Rating rating={tour.rating} reviews={tour.reviews} />
                <div className="tour-provider">
                    Activity Provider : <span>Hag</span>
                </div>
            </div>
            <div className="tour-img-wrapper">
                <img src={tour.image} alt={tour.title} className="tour-img" />
                <div className="book-now">
                        <div className="book-now-header">Save up to 35%</div>
                    <div className="book-now-body">
                        <div className="book-now-booked">Booked 42 times yesterday</div>
                        <div className="book-now-price-wrapper">
                            <div className="book-now-price">
                                <b>${tour.priceFrom}</b>
                                <p>per person</p>
                            </div>
                            <button className="book-now-btn">Book Now</button>
                        </div>
                        <p className="book-now-more-info">
                            <i className="bi bi-calendar-check"></i>
                            <span>Reserve now and pay later to book your spot and pay nothing today</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SingleTour;