import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VirtualProgram from './components/VirtualProgram';
import Introduction from './components/Introduction';
import AboutUs from './components/AboutUs';
import Terminology from './components/Terminology';
import Announcements from './components/Announcements';
import VideoLibrary from './components/VideoLibrary';
import HomePage from './HomePage/Homepage';
import ConfirmationMessage from './components/confirmationMessage/ConfirmationMessage';
import CourseListing from './components/CourseListing/CourseListing';
import CourseDetailsPage from './components/CourseDetails/CourseDetailspage';
import NewsListing from './components/NewsListing/NewsListing';
import NewsDetails from './components/NewsDetails/NewsDetails';
import { useState } from 'react';

import InnerLayout from './components/InnerLayout/InnerLayout';
import HomeLayout from './components/HomeLayout/HomeLayout';

function App() {
  let [active, setActive] = useState(true);
  return (
    <div className="App">
      {/* Please add your components here */}
      {/* Main Navigation */}

      {/* Header */}

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomeLayout active={active} setActive={setActive} />}
          >
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/" element={<InnerLayout />}>
            <Route path="VirtualProgram" element={<VirtualProgram />} />
            <Route path="contact" element={<Introduction />} />
            <Route path="about us" element={<AboutUs />} />
            <Route path="Announcements" element={<Announcements />} />
            <Route path="Terminology" element={<Terminology />} />
            <Route path="VideoLibrary" element={<VideoLibrary />} />
            <Route path="courselisting" element={<CourseListing />} />
            <Route path="coursedetails/:id" element={<CourseDetailsPage />} />
            <Route path="newslisting" element={<NewsListing />} />
            <Route path="newsdetails/:id" element={<NewsDetails />} />
          </Route>
          <Route
            path="*"
            element={<ConfirmationMessage type={'pageNotFound'} />}
          />
        </Routes>
      </BrowserRouter>

      {/* Footer */}
    </div>
  );
}

export default App;
