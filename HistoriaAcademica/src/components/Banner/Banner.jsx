import React from 'react'
import profilepic from "../../assets/profilepic.png"
import imginfo from "../../assets/imginfo.png"
import "./Banner.css"

const Banner = () => {
  return (
    <div className='banner-container'>
        <div className='img-container'>
            <img src={profilepic} />
        </div>
        <div className="info-container">
            <img src={imginfo} />
        </div>
    </div>
  )
}

export default Banner