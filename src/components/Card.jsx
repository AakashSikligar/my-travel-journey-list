import PropTypes from "prop-types";

export default function Card(props) {
  return (
    <>
      <div className="card--container">
        <div className="card--item">
          <div className="card--img">
            <img src={props.imageURl} />
          </div>
          <div className="card--content">
            <div className="card--location">
              <img className="location--logo" src="src\images\Fill 219.png" />
              <p className="location">{props.location}</p>
              <a href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <div className="card--place">
              <h1>{props.title}</h1>
            </div>
            <div className="card--date">
              <p>
                {props.startDate} - {props.endDate}
              </p>
            </div>
            <div className="card--description">
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  imageURl: PropTypes.string,
  location: PropTypes.string,
  googleMapsUrl: PropTypes.string,
  title: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  description: PropTypes.string,
};

/*
 key: "1",
    title: "Mount Fuji",
    location: "Japan",
    googleMapsUrl: "",
    startDate: "12 Jan, 2021",
    endDate: "24 Jan, 2021",
    description:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    imageURl: "src/images/mount-fuji.jpg",
*/
