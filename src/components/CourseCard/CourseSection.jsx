import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

import CourseCard from './CourseCard';

const CourseSection = () => {
  const [courseInfo, setcourseInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const linkObject = {
    title: 'Internship Courses',
    link: '/courselisting',
  };
  useEffect(() => {
    getItems()
      .then(response => {
        let { result } = response.data;
        result.splice(3);
        result.map(card => (card.fromHome = true));
        setcourseInfo(result);
        setIsLoading(false);
        setError('');
      })
      .catch(err => {
        setcourseInfo([]);
        setError(err.message);
        setIsLoading(false);
      });
  });

  function getItems() {
    return axios.get('https://api.npoint.io/80b099f2e45295878cd2');
  }

  return (
    <div className="courseContainer" id="courses">
      <span className="latestCourses">Latest Courses</span>
      <span className="coursesSubtext">Our latest seminars/courses</span>
      <div className="container text-center">
        <div className="row courseRow">
          {isLoading && (
            <div className="loaderContainer">
              <span className="loader"></span>
            </div>
          )}
          {error && <div className="errorMsg">{error}</div>}
          {courseInfo &&
            courseInfo.map(course => <CourseCard courseInfo={course} />)}
        </div>
      </div>
      {!isLoading && (
        <Link
          state={linkObject}
          to="courselisting"
          title="allCourses"
          className="text-decoration-none allCourses"
        >
          Check all Courses
        </Link>
      )}
      <Outlet />
    </div>
  );
};
export default CourseSection;
