import { Link } from "react-router-dom";

const NewsCard = (props) => {
  let { image_url, date, title, id } = props.cardArray;
  return (
    <div className="col-xl-4 col-lg-6 col-md-12">
      <Link to={`/newsdetails/${id}`} className="text-decoration-none">
        <div
          className="cardLayout"
          alt={title}
          style={{ backgroundImage: `url(${image_url})` }}
        >
          <div className="cardContent">
            <div className="newsDate">
              <span className="icon-calendar"></span>
              <span className="date">{date}</span>
            </div>
            <h5 className="newsTitle">{title}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
