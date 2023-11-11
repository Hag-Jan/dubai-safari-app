import "./news-letter.css"
import NewsLetterImage from "../../images/newsletterimage.jpg"

const NewsLetter = () => {
    return (
        <div className="news-letter">
            <div className="news-letter-container">
                <div className="news-letter-image-wrapper">
                    <img src={NewsLetterImage} alt="news-letter" className="news-letter-image" />
                </div>
                <div className="news-letter-content">
                    <h2 className="news-letter-contetnt-title">
                        Your Dubai itinerary is waiting.
                    </h2>
                    <p className="news-letter-content-desc">
                        Recieve a curated 48-hour itinerary featuring the most iconic
                        exerience in Dubai, straight to your inbox.
                    </p>
                    <div className="news-lettet-inputs">
                        <input type="text" placeholder="Your Email" className="news-lettet-input" />
                        <button className="news-lettet-btn">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsLetter;