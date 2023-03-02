import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className='services-container'>
    <div className='services-list-container'>
        {/* desc */}
        <div className='services-desc-container'>
        <h1>
            My <span>Skills</span>
        </h1>
        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p> */}

        </div>
        {/* item */}
    <div className='services-item-container'>
        <div className='service-item'>
            <i className='fa-solid fa-code'></i>
        <div className='item-desc'>
            <h3>MERN</h3>
            <p>Completed Certificate Courses with MERN and also completed several projects with this domains.  </p>
        </div>
        </div>
        <div className='service-item'>
            <i className='fa-solid fa-desktop'></i>
        <div className='item-desc'>
            <h3>Git</h3>
            <p> </p>
        </div>
        </div>
        <div className='service-item'>
            <i className='fa-solid fa-tablet-alt'></i>
        <div className='item-desc'>
            <h3>AWS</h3>
            <p> </p>
        </div>
        </div>
    </div>
    <button>Hire Me</button>

    </div>
    </div>
  )
}

export default Services
