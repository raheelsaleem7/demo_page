import React from 'react'
import "./_AboutUs.scss"
import will from '../../assests/images/WIll.png'
import will2 from '../../assests/images/mohsin.png'

function AboutUs() {
  return (
    <div className='about'>
        <div className='about_container'>
            <div className='contact-us'>
            <h2>Let us help you solve your <br /> real estate needs</h2>
             <p>Our team is here for you.</p>

             <button>Book A Call</button>
             <div>
             <span>or start investing now!</span>
              </div>
</div>
              <div className='picture'>

                  <div className='pic1'>
                   <img src={will2} />
                  </div>

                  <div className='pic2'>
                   <img src={will} />
                  </div>
              </div>
        </div>
    </div>
  )
}

export default AboutUs