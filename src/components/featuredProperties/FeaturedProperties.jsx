import React from 'react'
import './FeaturedProperties.css'
import yala from '../../assets/images/yala.jpg'
import amsterdam from '../../assets/images/amsterdam.jpg'
import turkey from '../../assets/images/turkey.jpg'
import italy from '../../assets/images/italy.jpg'

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
        <img src={yala} alt="" className="fpImg" />
        <span className="fpName">Wild Coast Tented Lodge</span>
        <span className="fpCity">Yala</span>
        <span className="fpPrice">Starting from $100</span>
        <div className="fpRating">
            <button>7.3</button>
            <span>Good</span>
        </div>
        </div>
        <div className="fpItem">
        <img src={amsterdam} alt="" className="fpImg" />
        <span className="fpName">HOTEL DE L'EUROPE</span>
        <span className="fpCity">Amsterdam</span>
        <span className="fpPrice">Starting from $300</span>
        <div className="fpRating">
            <button>9.0</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src={italy} alt="" className="fpImg" />
        <span className="fpName">Villa Cortine Palace</span>
        <span className="fpCity">Viale Gennari</span>
        <span className="fpPrice">Starting from $250</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src={turkey} alt="" className="fpImg" />
        <span className="fpName">Cappadocia Cave Lodge</span>
        <span className="fpCity">Goreme</span>
        <span className="fpPrice">Starting from $150</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
    </div>
  )
}

export default FeaturedProperties