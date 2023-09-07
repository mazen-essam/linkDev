import React from 'react'
import NoContentImg from '../../assets/images/ConfirmationMessages/no_content.svg';
import ErrorImg from '../../assets/images/ConfirmationMessages/error.svg';
import PageNotFoundImg from '../../assets/images/ConfirmationMessages/page_not_found.svg';
import ThankYouImg from '../../assets/images/ConfirmationMessages/thankyou.svg';
import { Link } from 'react-router-dom';

/**
 * @author [Yousef Gilany]
 * This is the confirmation message component. It has 4 types: noContent, error, pageNotFound, thankYou. 
 * @param {string} type - The type of the confirmation message. It can be one of the following: noContent, error, pageNotFound, thankYou.
 * @returns {JSX} - Confirmation message component.
 * @example <ConfirmationMessage type={"pageNotFound"} />
 */
const ConfirmationMessage = ({type}) => {

    const messages = {
        noContent: {
            img: NoContentImg,
            title: 'No Content to show!',
            paragraph: 'There is no Content to show right now',
            style: 'light'
        },
        error: {
            img: ErrorImg,
            title: 'Error !',
            paragraph: 'You already have enrolled to the course.',
            style: 'light'
        },
        pageNotFound: {
            img: PageNotFoundImg,
            title: 'Page Not Found!',
            paragraph: 'The Page you requested could not be Found',
            style: 'dark'
        },
        thankYou: {
            img: ThankYouImg,
            title: 'Thank You!',
            paragraph: 'You have applied in this course successfully.',
            style: 'light'
        }
    }
  return (
    <section>
        <div class={` p-5 text-center confirmation_msg ${messages[type].style === "dark" ? "dark" : null}   `}>
            <img class="mx-auto" title={`${type} icon`}  src={messages[type].img} alt={`${type} icon`} />
            <h2 class="main-heading-navy ">{messages[type].title}</h2>
            <p class="main-paragraph-navy mb-5 ">{messages[type].paragraph}</p>
            <Link to="/" class="navy-btn">Back Home</Link>
        </div>
    </section>
  )
}

export default ConfirmationMessage