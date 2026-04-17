import React from 'react'
import bottomLeftImage from "../assets/svg/left-bottom.svg"
import topRightImage from "../assets/svg/right-top.svg"

export default function BGVectors() {
  return (
    <div className='bgVectors'>
        <img src={topRightImage} alt="vector 1" />
        <img src={bottomLeftImage} alt="vector 2" />
    </div>
  )
}
