import React from 'react'

/**
 * @author [Yousef Gilany]
 * This is the content of the hero component. It shows the content of the hero section in the home page.
 * @param {JSX} heading - The heading of the hero section.
 * @param {JSX} paragraph - The paragraph of the hero section.
 * @param {JSX} button - The button of the hero section.
 * @returns {JSX} - Hero content component.
 * @example <HeroContent heading={<h1>Launch your career<br />with LinkDev's Internship<br />Program</h1>} paragraph={<p>Our internship program is designed to help you gain<br />experience and knowledge in the IT industry.</p>} button={<button className="white-large-btn">Apply Now</button>} />
 */
const HighlightsContent = ({heading,paragraph,button}) => {
  return (
    <div className="carousel-caption d-md-block">
    {heading}
   {paragraph}
<button className="white-large-btn">
{button}</button>
 </div>
  )
}

export default HighlightsContent