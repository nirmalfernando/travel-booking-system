import React from 'react'
import './PropertyList.css'
import hotel from '../../assets/images/hotel.jpg'
import resort from '../../assets/images/resort.jpg'
import apartment from '../../assets/images/apartment.jpg'
import villa from '../../assets/images/villa.jpg'
import cabin from '../../assets/images/cabin.jpg'

const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src={hotel} alt="" className="pListImg" />
            <div className="pListTitles">
                <p>Hotels <br/>
                    <span className='pListDesc'>255 available</span>
                </p>
            </div>
        </div>
        <div className="pListItem">
            <img src={resort} alt="" className="pListImg" />
            <div className="pListTitles">
                <p>Resorts <br/>
                    <span className='pListDesc'>155 available</span>
                </p>
            </div>
        </div>
        <div className="pListItem">
            <img src={apartment} alt="" className="pListImg" />
            <div className="pListTitles">
                <p>Apartments <br/>
                    <span className='pListDesc'>60 available</span>
                </p>
            </div>
        </div>
        <div className="pListItem">
            <img src={villa} alt="" className="pListImg" />
            <div className="pListTitles">
                <p>Villas <br/>
                    <span className='pListDesc'>100 available</span>
                </p>
            </div>
        </div>
        <div className="pListItem">
            <img src={cabin} alt="" className="pListImg" />
            <div className="pListTitles">
                <p>Cabins <br/>
                    <span className='pListDesc'>46 available</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default PropertyList