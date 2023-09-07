import { Link } from 'react-router-dom';
const SectionText = ({ textData, buttonText, route, isArrow }) => {
  const { title, breif, subTitle, description } = textData;
  return (
    <div className="internship__text">
      <h3>{title}</h3>
      <p>{breif}</p>
      {/* Place arrow component here */}
      {isArrow ? <></> : ''}
      {subTitle !== '' ? <h4>{subTitle}</h4> : ''}
      {description !== '' ? <p>{description}</p> : ''}
      <Link to={route}>{buttonText}</Link>
    </div>
  );
};

export default SectionText;
