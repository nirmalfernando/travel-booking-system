import React from 'react'
import "./Featured.css"
import sriLanka from '../../assets/images/2.jpg';
import maldives from '../../assets/images/1.jpg';
import usa from '../../assets/images/3.jpg'
import brooklyn from '../../assets/images/4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
          <img src={sriLanka} alt="" className='featuredImg'/>
        <div className="featuredTitles">
          <FontAwesomeIcon icon={faMapLocationDot} />
          <span> Sri Lanka</span>
        </div>
      </div>
      <div className="featuredItem">
          <img src={maldives} alt="" className='featuredImg'/>
        <div className="featuredTitles">
          <FontAwesomeIcon icon={faMapLocationDot} />
          <span> Maldives</span>
        </div>
      </div>
      <div className="featuredItem">
          <img src={usa} alt="" className='featuredImg'/>
        <div className="featuredTitles">
          <FontAwesomeIcon icon={faMapLocationDot} />
          <span> United Kingdom</span>
        </div>
      </div>
      <div className="featuredItem">
          <img src={brooklyn} alt="" className='featuredImg'/>
        <div className="featuredTitles">
          <FontAwesomeIcon icon={faMapLocationDot} />
          <span> USA</span>
        </div>
      </div>
    </div>
  )
}

export default Featured