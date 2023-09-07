import React from 'react'

import { Link } from 'react-router-dom';

/**
 * @author [Yousef Gilany]
 * This is the bottom button component. It shows the bottom button in the hero section in the home page. 
 * @returns {JSX} - Bottom button component.
 * @example <BottomButton />
 */
const BottomButton = () => {
  return (
    <div className='bottom__button'>
    <Link to='/'>
    <h5>Explore More</h5>
    </Link>
    <div className="vertical-line"></div>

    </div>
  )
}

export default BottomButton