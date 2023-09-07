import React, { useState, useEffect } from 'react';
import QualityImg from '../../assets/images/Departments/QualityImg.webp';
import BackendImg from '../../assets/images/Departments/BackendImg.webp';
import FrontendImg from '../../assets/images/Departments/frontendImg.webp';
import PreSalesImg from '../../assets/images/Departments/presalesImg.webp';
import UxImg from '../../assets/images/Departments/uxImg.webp';
import { Link } from 'react-router-dom';
import ImageContainer from './components/ImageContainer';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

/**
 * @author [Yousef Gilany]
 * This is the departments component. It shows the departments section in the home page.
 * @returns {JSX} - Departments component.
 * @example <Departments />
 */
const Departments = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [departments, setDepartments] = useState({});

  function ShowError(msg, toastId) {
    toast.error(msg, {
      position: 'bottom-left',

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

  function fetchDepartments() {
    axios
      .get('https://api.npoint.io/045c330d8ff3e670e7de')
      .then(response => {
        setDepartments(response.data.result.departments);
        setItems(response.data.result.items);
        setIsLoading(false);
        setError('');
      })
      .catch(error => {
        const toastId = 'errorToast';

        if (!toast.isActive(toastId)) {
          ShowError('Error fetching data from API', toastId);
        }

        setError('Error fetching data from API');

        setItems([]);
        setDepartments({});
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchDepartments();
  }, []);

  return (
    <>
      {!isLoading && (
        <section className=" programs-section container-fluid">
          <div className="bg-img">
            <div className="row g-0">
              <div className="col-xl-6 programs-content ">
                <div className="extra-bg"></div>

                <h2 className="mb-3">{departments?.title}</h2>
                <p>{departments?.description}</p>
                <div className="programs-buttons">
                  <Link to="/all-programs" className="navy-btn">
                    All Programs
                  </Link>
                </div>
              </div>

              <div className=" col-xl-6 programs-img ">
                <div className="mini-programs-img">
                  <ImageContainer image={FrontendImg} title={items[1]?.title} />
                  <ImageContainer image={UxImg} title={items[2]?.title} />
                  <ImageContainer
                    image={QualityImg}
                    title={items[3]?.title}
                    hideOnMobiles
                  />
                  <ImageContainer
                    image={PreSalesImg}
                    title={items[4]?.title}
                    hideOnMobiles
                  />
                </div>
                <div className="grid-container">
                  <div className="column-1">
                    <ImageContainer
                      image={BackendImg}
                      title={items[0]?.title}
                    />
                  </div>
                  <div className="column-2">
                    <ImageContainer
                      image={FrontendImg}
                      title={items[1]?.title}
                    />
                    <ImageContainer image={UxImg} title={items[2]?.title} />
                  </div>
                  <div className="column-3">
                    <ImageContainer
                      image={QualityImg}
                      title={items[3]?.title}
                    />
                    <ImageContainer
                      image={PreSalesImg}
                      title={items[4]?.title}
                    />
                    <ImageContainer
                      image={QualityImg}
                      title={items[3]?.title}
                      hidden
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {error && <ToastContainer />}{' '}
    </>
  );
};

export default Departments;
