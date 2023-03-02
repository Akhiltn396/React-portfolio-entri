import React from 'react'
import './Work.css'
import w1 from '../../assets/w1.jpg'
import w2 from '../../assets/w2.jpg'
import w3 from '../../assets/w3.jpg'
import w4 from '../../assets/w4.jpg'
import w5 from '../../assets/w5.jpg'
import w6 from '../../assets/w6.jpg'
import elevate from '../../assets/elevate.png'
import angela from '../../assets/udemy-angela.png'
const Work = () => {
  return (
    <div className='works-container'>
      <h1>My Courses</h1>
      <div className='works-list-container'>
        <div className='works-item'>
        <img src={elevate} alt='elevate' ></img>
        </div>
        <div className='works-item'>
        <img src={angela} alt='w2'></img>
        </div>
         {/*<div className='works-item'>
        <img src={w3} alt='w3'></img>
        </div>
        <div className='works-item'>
        <img src={w4} alt='w4'></img>
        </div>
        <div className='works-item'>
        <img src={w5} alt='w5'></img>
        </div>
        <div className='works-item'>
        <img src={w6} alt='w6'></img>
        </div> */}

      </div>
    </div>
  )
}

export default Work
