import img1 from "../../assets/images/newsDetails.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const NewsDetails = () => {
   const [items, setItems] = useState(null);
   const [isLoading, setLoading] = useState(true);
   const [error, setError] = useState("");
   const { id } = useParams();
   useEffect(() => {
      getResult()
         .then((response) => {
            let { result } = response.data;
            setItems(result);
            setLoading(false);
            setError("");
         })
         .catch((error) => {
            const toastId = "errorToast";
            if (!toast.isActive(toastId)) {
               ShowError("Error fetching data from API", toastId);
            }
            setError("Error fetching data from API");
            setItems(null);
            setLoading(false);
         });
   }, []);
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
   function getResult() {
      return axios.get(`https://api.npoint.io/0c38963cd891ffa7d5d8?id=${id}`);
   }
   return (
      <section className="newsDetails container__header py-5 my-5">
         {isLoading && (
            <div className="loaderContainer">
               <span className="loader"></span>
            </div>
         )}
         {items && (
            <div key={items.id}>
               <div className="detailsHeader">
                  <h5>{items.title}</h5>
                  <span className="detailsDate">Date: </span>
                  <span>{items.date}</span>
               </div>
               <div className="img">
                  <img src={img1} alt="news details"></img>
               </div>

               <div className="detailsFooter">
                  <p>{items.brief}</p>
               </div>
            </div>
         )}
         {error && <ToastContainer />}
      </section>
   );
};
export default NewsDetails;
