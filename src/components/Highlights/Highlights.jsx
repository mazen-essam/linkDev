import React, { useEffect, useState } from "react";
import HeroBg from "../../assets/images/Highlights/HeroBg.webp";
import HeroBg2 from "../../assets/images/Highlights/HeroBg2.webp";
import BottomButton from "./components/BottomButton";
import HighlightsContent from "./components/HighlightsContent";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import NavBar from "../NavBar/NavBar";

/**
 * @author [Yousef Gilany]
 * This is the hero/highlights section of the home page. It contains a carousel with 3 slides.
 * @returns {JSX} - Hero component.
 * @example <Hero />
 */
const Highlights = () => {
  const [highlights, setHighlights] = useState([]); // state to hold the data from the api call
  const [isLoading, setIsLoading] = useState(true); // state to hold the loading status of the api call
  const [error, setError] = useState(null); // state to hold the error status of the api call
  

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

  function fetchingHighlights(){
      axios
      .get("https://api.npoint.io/4b2437ba3a41ec714087")
      .then((response) => {
        setHighlights(response.data.result);
        setIsLoading(false);
        setError("");
      })
      .catch((error) => {

          const toastId = "errorToast";

            if (!toast.isActive(toastId)) {

               ShowError("Error fetching data from API", toastId);

            }

            setError("Error fetching data from API");

            setHighlights(null);

            setIsLoading(false);
      });
  };
      
  useEffect(() => {
  fetchingHighlights();
  },[]);

  return (
    !isLoading && <div
      className="carousel slide vertical"
      data-bs-ride="false"
      id="carouselExampleCaptions"

    >
        <div className="NavBar__Container" >
    <NavBar />
    </div>
  
  

      <div className="carousel-indicators carousel__indicators">

        <button
          id="carousel__button"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          id="carousel__button"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          id="carousel__button"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        {highlights?.map((highlight, index) => {
          return (
            <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"}>
              <BottomButton />
              <img
                src={index === 1 ? HeroBg2 : HeroBg}
                className="d-block w-100"
                alt={index === 1 ? "A girl reading a book" : "Some plants on a desk"}
              />
              <HighlightsContent
                heading={<h1>{highlight.title}</h1>}
                paragraph={<p>{highlight.brief}</p>}
                button={"Explore Virtual Programs"}
              />
            </div>
          );
        })}
      </div>
      {error && (

<ToastContainer />

)}  
    </div>
  

  );
};

export default Highlights;

