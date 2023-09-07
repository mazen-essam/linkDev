import Footer from '../footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const InnerLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default InnerLayout;
