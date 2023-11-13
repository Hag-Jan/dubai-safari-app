import { useParams } from "react-router-dom";
import { toursList } from "../../data";
import "./single-tour.css"
import Rating from "../../components/tours/Rating";
import BookNow from "./BookNow";

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
                <BookNow priceForm={tour.priceFrom} />
            </div>
            <p className="tour-description">
                Discover a different side of Dubai an a fun-filled safari across the
                desert. Try sandboarding, dune bashing and a camel ride, with the option
                to add an electifying quad bike ride or immersive Al Khayma Camp dinner
                experience to your adventure.
            </p>
            <div className="tour-more-information">
                <h2 className="tour-more-title">About this activity</h2>
                <div className="tour-info-item">
                    <div className="tour-info-item-title">
                        <i style={{ color: '#27ae60' }} className="bi bi-calndar3">Free Cancelation</i>
                    </div>
                    <p className="tour-info-item-desc">
                        Candel up to 24 hours in advance to recieve a full refund
                    </p>
                </div>
                <div className="tour-info-item">
                    <div className="tour-info-item-title">
                        <i style={{ color: '#2980b9' }} className="bi bi-calendar-plus-fill">Reserve now & pay later</i>
                    </div>
                    <p className="tour-info-item-desc">Keep your travel plan flexible -- book your spot and pay nothing</p>
                </div>
                <div className="tour-info-item">
                    <div className="tour-info-item-title">
                        <i style={{ color: '#e74c3c' }} className="bi bi-virus">Covid -23 precautions</i>
                    </div>
                    <p className="tour-info-item-desc">Special health and safety measures are in place. Check your activity
                        voucher once you book for full details.</p>
                </div>
                <div className="tour-info-item">
                    <div className="tour-info-item-title">
                        <i style={{ color: '#8e44ad' }} className="bi bi-clock-history">Duration 4 - 7 hours</i>
                    </div>
                    <p className="tour-info-item-desc">Check availability to see staring times.</p>
                </div>
                <div className="tour-info-item">
                    <div className="tour-info-item-title">
                        <i style={{ color: '#2c3e50' }} className="bi bi-person-check">Live tour guide</i>
                    </div>
                    <p className="tour-info-item-desc">English</p>
                </div>
            </div>
        </section>
    );
}

export default SingleTour;