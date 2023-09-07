import ListItem from '../ListItem/ListItem';
import SocialsList from '../SocialLists/SocialsList';
import { Link } from 'react-router-dom';
const Footer = () => {
  const items = [
    'Introduction',
    'About Us',
    'Announcements',
    'Terminology',
    'Video Library',
  ];
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer">
      <Link href="/" className="back__top" onClick={scrollToTop}>
        Back to Top
      </Link>
      <section className="footer__header container__footer">
        <h3>Subscribe to our newsletter</h3>
        <div className="footer__header_subscribe">
          <input
            type="text"
            name="email"
            id=""
            placeholder="Your email address here"
          />
          <button>Subscribe</button>
        </div>
      </section>
      <hr />
      <ul className="list__footer container__footer">
        {items.map((item, i) => (
          <ListItem item={item} key={i} />
        ))}
      </ul>
      <hr className="tablet__hidden" />
      <div className="footer__end container__footer">
        <small>All rights reserved © 2023 Link Development</small>
        <SocialsList />
      </div>
    </footer>
  );
};

export default Footer;
