import NewsCard from './NewsCard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

const LatestNews = () => {
  const [newsInfo, setNewsInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [sliderRef, setSliderRef] = useState(null);
  const linkObject = {
    title: 'News Listing',
    link: '/newslisting',
  };
  useEffect(() => {
    getItems()
      .then(response => {
        let { result } = response.data;
        result.map(card => (card.fromHome = true));
        setNewsInfo(result);
        setLoading(false);
        setError('');
        console.log(response);
      })
      .catch(error => {
        setLoading(false);
        setError(error.message);
        setNewsInfo([]);
        console.log(error);
      });
  }, []);
  function getItems() {
    return axios.get('https://api.npoint.io/ccb79b7aabe7bf97d5cc');
  }
  const sliderSettings = {
    dots: false,
    touchMove: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1.6,
    slidesToScroll: 1,
    className: 'slickCarousel',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section id="news" className="newsSection">
      <div className="container ">
        <div className="row justify-content-between">
          <div className="col-lg-4 col-md-12">
            <div className="cardNext">
              <h2>Latest News</h2>
              <p>Check our latest news and activities</p>
              <div className="carouselButtons">
                <button
                  onClick={sliderRef?.slickPrev}
                  className="icon-arrow-left"
                ></button>
                <button
                  onClick={sliderRef?.slickNext}
                  className="icon-arrow-right"
                ></button>
              </div>
              <Link
                to="newsListing"
                title="all news"
                className="text-decoration-none newsButton"
                state={linkObject}
              >
                Check all news
              </Link>
            </div>
          </div>
          <Slider ref={setSliderRef} {...sliderSettings}>
            {newsInfo.map(card => (
              <NewsCard key={card.id} cardArray={card} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
