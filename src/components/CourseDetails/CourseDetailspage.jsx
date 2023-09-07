import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

import CourseDetails from "./CourseDetails";

function CourseDetailsPage() {
  const [courseInfo, setCourseInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const searchParams = useParams();

  useEffect(() => {
    getItems()
      .then((response) => {
        let result = response.data.result;
        setCourseInfo(result);
        setIsLoading(false);
        setError("");
      })
      .catch((err) => {
        const toastId = "errorToast";
        if (!toast.isActive(toastId)) {
          ShowError("Error fetching data from API", toastId);
        }
        setError("Error fetching data from API");
        setCourseInfo(null);
        setIsLoading(false);
      });
  });

  function getItems() {
    return axios.get(
      `https://api.npoint.io/87a1b4d496c551fd6d4f?id=${searchParams.id}`
    );
  }

  function ShowError(msg, toastId) {
    toast.error(msg, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      toastId: toastId,
    });
  }

  return (
    <div className="courseDetailsPage">
      {isLoading ? (
        <div className="loaderContainer">
          <span className="loader"></span>
        </div>
      ) : (
        courseInfo && <CourseDetails courseDetails={courseInfo} />
      )}
      {error && (
        <ToastContainer/>
      )}
    </div>
  );
}

export default CourseDetailsPage;
