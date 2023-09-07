import CourseSection from '../components/CourseCard/CourseSection';
import InternshipSection from '../components/InternshipSection/InternshipSection';
import Departments from '../components/departments/departments';
import LatestNews from '../components/LatestNews/LatestNews';
import Highlights from '../components/Highlights/Highlights';

function HomePage() {
  return (
    <div>
      {/* Please add your components here */}
      {/* Banner */}
      <Highlights />

      {/* Departments */}
      <Departments />
      {/* Internship */}
      <InternshipSection />
      <CourseSection />

      {/* Latest News */}
      <LatestNews />

      {/* Footer */}
    </div>
  );
}

export default HomePage;
