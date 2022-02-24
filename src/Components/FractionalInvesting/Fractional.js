import React from 'react'
import "./_Fractional.scss"
import img1 from '../../assests/images/circle.png'
import img2 from '../../assests/images/building.png'

function Fractional() {
    const data = [
        {
          svg:<svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.05 4.68563V7.36418C27.05 9.72469 21.1712 11.6499 13.925 11.6499C6.67894 11.6499 0.800049 9.72469 0.800049 7.36418V4.68563C0.800049 2.32512 6.67894 0.399902 13.925 0.399902C21.1712 0.399902 27.05 2.32512 27.05 4.68563ZM27.05 10.7124V16.7392C27.05 19.0997 21.1712 21.0249 13.925 21.0249C6.67894 21.0249 0.800049 19.0997 0.800049 16.7392V10.7124C3.61987 12.6544 8.78099 13.5584 13.925 13.5584C19.0691 13.5584 24.2302 12.6544 27.05 10.7124ZM27.05 20.0874V26.1142C27.05 28.4747 21.1712 30.3999 13.925 30.3999C6.67894 30.3999 0.800049 28.4747 0.800049 26.1142V20.0874C3.61987 22.0294 8.78099 22.9334 13.925 22.9334C19.0691 22.9334 24.2302 22.0294 27.05 20.0874Z" fill="#0C1B61"/></svg>,
          h6:"Are you an asset owner?",
          p:"List your property with AKRU",
         svg2:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="#0C1B61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5L19 12L12 19" stroke="#0C1B61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        },
        {
            svg:<svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.05 4.68563V7.36418C27.05 9.72469 21.1712 11.6499 13.925 11.6499C6.67894 11.6499 0.800049 9.72469 0.800049 7.36418V4.68563C0.800049 2.32512 6.67894 0.399902 13.925 0.399902C21.1712 0.399902 27.05 2.32512 27.05 4.68563ZM27.05 10.7124V16.7392C27.05 19.0997 21.1712 21.0249 13.925 21.0249C6.67894 21.0249 0.800049 19.0997 0.800049 16.7392V10.7124C3.61987 12.6544 8.78099 13.5584 13.925 13.5584C19.0691 13.5584 24.2302 12.6544 27.05 10.7124ZM27.05 20.0874V26.1142C27.05 28.4747 21.1712 30.3999 13.925 30.3999C6.67894 30.3999 0.800049 28.4747 0.800049 26.1142V20.0874C3.61987 22.0294 8.78099 22.9334 13.925 22.9334C19.0691 22.9334 24.2302 22.0294 27.05 20.0874Z" fill="#0C1B61"/></svg>,
            h6:"Are you an advisor looking for alternatives?",
            p:"It’s easy to get started",
           svg2:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="#0C1B61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5L19 12L12 19" stroke="#0C1B61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          },
    ]
  return (
    <div className='fractional'>
        <div className='fractional_container'>
           
            <div className='images'>

                <div className='img1'>
                   <img src={img1} />
                 </div>

                <div className='img2'>
                <img src={img2} />
                </div>

            </div>


            <div className='right-content'>
                <div className='guide'>
              <h4>Fractionalized investing </h4>
              <p>Create or access a portfolio of tokenized real estate</p>
                </div>
    {
           data.map((Fractional) => (
         
              <div className='user_info'>
               <div className='for_svg'>
                {Fractional.svg}

               </div>

               <div className='text'>
                   <h6>{Fractional.h6}</h6>
                   <p>{Fractional.p}</p>
               </div>

               <div className='for_svg2'>
               {Fractional.svg2}

               </div>
              </div>

      
))
}
            </div>
        </div>
    </div>
  )
}

export default Fractional