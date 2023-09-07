import NewsCard from "../LatestNews/NewsCard";
import axios from "axios";
import React, { useState, useEffect } from "react";

const NewsListing = () => {
    const [newsListing, setNewsListing] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        getItems().then((response) => {
            let { result } = response.data;
            result.map((card) => (card.fromHome = true));
            setNewsListing(result);
            setLoading(false);
            setError('');
            console.log(response);
        }).catch(error => {
            setLoading(false);
            setError(error.message);
            setNewsListing([]);
            console.log(error);
        })
    }, []);
    function getItems() {
        return axios.get("https://api.npoint.io/2d661a3bed4a0bbec6f3");
    }

    return (
        <div className="container">
            <div className="row justify-content-between">
                {newsListing.map((card) => (
                    <NewsCard key={card.id} cardArray={card} />
                ))}
            </div>
        </div>
    );
}
export default NewsListing;