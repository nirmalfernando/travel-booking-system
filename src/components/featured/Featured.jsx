import React from 'react'
import "./Featured.css"
import sriLanka from '../../assets/images/sri-lanka.jpg';
import maldives from '../../assets/images/1.jpg';


const featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredImg">
          <img src={sriLanka} alt="" />
        </div>
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <div className="featuredImg">
          <img src={maldives} alt="" />
        </div>
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
    </div>
  )
}

export default featured