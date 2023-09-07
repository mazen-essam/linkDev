import { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [linkInfo, setLinkInfo] = useState(location.state);

  return (
    <>
      <header className="header flex">
        <NavBar />
        <div className="header__text container__header">
          <h1>{linkInfo?.title}</h1>
          <p>
            <Link to="/">Home</Link> <span className="icon-arrow-right"></span>
            {linkInfo && (
              <Link to={linkInfo?.link}>
                {linkInfo?.title}
                {linkInfo?.title === 'Internship Courses' ? ' Listing' : ''}
              </Link>
            )}
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
