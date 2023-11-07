
import { toursList } from "../../data";
import Rating from "./Rating";
import TourItem from "./TourItem";
import "./tour-list.css"

const TourList = ({ toursList }) => {
    return (
        <div className="tour-list">
            {toursList.map(item =>
                <TourItem item={item} key={item.id} />

            )}
        </div>
    );
}

export default TourList;