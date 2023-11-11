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
        </section>
    );
}

export default SingleTour;