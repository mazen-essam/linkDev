import logo from '../../assets/images/Link_logo_vertical_color_light_RGB.svg';

const InternshipSectionImage = ({ img }) => {
  return (
    <div className="internship_img ">
      <img
        src={img}
        alt="intern working"
        className="intern__image"
        loading="lazy"
      />
      <div className="internship_img__box">
        <img src={logo} alt="logo" loading="lazy" />
        <p>Virtual Internship</p>
      </div>
    </div>
  );
};

export default InternshipSectionImage;
