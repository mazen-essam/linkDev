import MainMenu from '../MainMenu/MainMenu';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';
const HomeLayout = ({ active, setActive }) => {
  return (
    <div>
      <div>
        <a class="skip-to-content" href="#departments">
          Skip to departments
        </a>
        <a class="skip-to-content" href="#internship">
          Skip to internship
        </a>
        <a class="skip-to-content" href="#courses">
          Skip to latest Courses
        </a>
        <a class="skip-to-content" href="#news">
          Skip to Latest News
        </a>
        <a class="skip-to-content" href="#footer">
          Skip to footer
        </a>
      </div>
      <MainMenu active={active} setActive={setActive} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
