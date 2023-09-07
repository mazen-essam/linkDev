import SectionText from '../SectionText/SectionText';
import InternshipSectionImage from '../InternshipSectionImage/InternshipSectionImage';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import axios from 'axios';

const InternshipSection = () => {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  function ShowError(msg, toastId) {
    toast.error(msg, {
      position: 'top-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      toastId: toastId,
    });
  }

  async function getItems() {
    try {
      const response = await axios.get(
        `https://api.npoint.io/0e5a7a9c39a3041235ae`
      );
      setItems(response.data.result.internship);
      setIsLoading(false);
      setError('');
    } catch (err) {
      const toastId = 'errorToast';
      if (!toast.isActive(toastId)) {
        ShowError('Error fetching data from API', toastId);
      }
      setError('Error fetching data from API');
      setItems(null);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <section
      className="internship row g-0  justify-content-between"
      id="internship"
    >
      <div className="internship__text col-12 col-lg-6 col-xl-3">
        {isLoading && (
          <div className="loaderContainer">
            <span className="loader"></span>
          </div>
        )}
        {items && (
          <SectionText
            textData={items}
            buttonText={'Read more'}
            route="courselisting"
            isArrow={false}
          />
        )}
        {error && <ToastContainer />}
      </div>
      <div className="col-12 col-xl-6 col-xxl-7">
        {isLoading && (
          <div className="loaderContainer">
            <span className="loader"></span>
          </div>
        )}
        {items && <InternshipSectionImage img={items.image_url} />}
      </div>
    </section>
  );
};

export default InternshipSection;
