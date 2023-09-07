import axios from "axios";
import React, {useState, useEffect} from "react";

import CourseCard from "../CourseCard/CourseCard";

function CourseListing() {
  const [courseInfo, setCourseInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getItems().then((response) => {
      let {result} = response.data;
      result.map(card => card.fromHome = false)
      setCourseInfo(result);
      setIsLoading(false);
      setError("");
    }).catch((err) =>{
      setCourseInfo([]);
      setError(err.message);
      setIsLoading(false);
    })
  })

  function getItems(){
    return axios.get('https://api.npoint.io/80b099f2e45295878cd2')
  }


  
  return (
    <>
  
    <div className="courseListing container text-center" role="main" aria-label="Website Header">
      <div className="row courseRow">
      {isLoading && <div className = "loaderContainer"><span className="loader"></span></div>}
      {error && <div className="errorMsg">{error}</div> }
          {courseInfo && courseInfo.map((courses) => (
          <CourseCard courseInfo={courses} />
        ))}
      </div>
      
    </div>
    
    </>
  );
}

export default CourseListing;
