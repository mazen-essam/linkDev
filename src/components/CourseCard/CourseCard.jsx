import { Link, Outlet } from "react-router-dom";

const CourseCard = (props) => {
  let{ 
    image_url,
    category,
    title,
    brief,
    start_date,
    end_date,
    rate,
    fromHome,
    id} = props.courseInfo,
    extraCourseType = "Online Symposium";
    
  return (
    <div className="column col-lg-4 col-md-6 courseColumn ">
      <Link to={`/coursedetails/${id}`} className="courseCard">
        <div className="courseImageType">
          <img
            className="courseImage"
            src={image_url}
            alt={`${title} course`}
          />
          <div className="categoryContainer">
          {category.category_name && <span className="courseType">{category.category_name}</span>}
          {fromHome ? null : (
            <span className="extraCourseType">{extraCourseType}</span>
          )}
          </div>
        </div>
        <div className="courseDateSessions">
          <div className="courseDate">
            <span className="icon-calendar"></span>
            <span className="courseDateText">{start_date + ' - ' + end_date}</span>
          </div>

          <div className="courseSessions">
            <span className="icon-book"></span>
            <span className="courseSessionsText">{props.courseInfo.seminars_count + ' Sessions'}</span>
          </div>
        </div>
        <h3 className="courseTitle">{title}</h3>
        <p className="courseInfo">{brief}</p>

        {fromHome ? (
          <div className="rating">
            <span className="ratingScore">{rate.rates_score + ` (${rate.rates_count})`}</span>
            <span className="icon-star"></span>
          </div>
        ) : null}
        {fromHome ? (
          <Link
            to={`coursedetails/${id}`}
            title="readMore"
            className="readMore text-decoration-none"
          >
            <span className="icon-arrow-right"></span>
            <span>Read more</span>
          </Link>
        ) : (
          <Link
            to={`/coursedetails/${id}`}
            title="readMore"
            className="listingReadMore text-decoration-none"
          >
            <span className="icon-arrow-right"></span>
            <span>Read more</span>
          </Link>
        )}
        <Outlet />
      </Link>
    </div>
  );
};
export default CourseCard;
