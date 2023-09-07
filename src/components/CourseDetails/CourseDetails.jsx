function CourseDetails(props) {
  let { date, rate, brief, title, category, image_url } =
    props.courseDetails;

  return (
    <div className="courseDetails">
      <div className="detailsCategoryRating">
        <div className="detailsCategory">
          <span className="courseCategory">{category.category_name}</span>
          <span className="courseSubCategory">Sub Category</span>
        </div>
        <div className="detailsRating">
          <span className="ratingScore">
            {rate.rates_score + ` (${rate.rates_count})`}
          </span>
          <span className="icon-star"></span>
        </div>
      </div>
      <span className="detailsTitle">{title}</span>
      <div className="extraDetails">
        <span className="languagesPretext">Supported Languages: </span>
        <span className="languages">English, Arabic</span>
        <span className="languagesPretext">Date: </span>
        <span className="languages">{date}</span>
      </div>
      <img className="courseDetailsImage" src={image_url} alt={`${title} course`}></img>

      <span className="courseDetailsBrief">{brief}</span>
    </div>
  );
}

export default CourseDetails;
