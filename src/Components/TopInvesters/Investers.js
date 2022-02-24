import React from 'react'
import './_Investers.scss'
import star from '../../assests/images/Star 5.png'
import owner1 from'../../assests/images/image-2 1.png'
import owner2 from'../../assests/images/headshot 1.png'
import owner3 from'../../assests/images/head.png'


function Investers() {
      const owner = [
          {
            img: star,
            p:"I prefer to choose specific real estate development projects to invest into. AKRU’s platform allows me to do that at a low cost of entry.",
            owner:owner1, 
            h5:"John Stieger",
            span:"Cincinnati, OH"
        },
        {
            img: star,
            p:"I Overall, my experience using AKRU has been fantastic. The app functions seamlessly and I love having the option to make fractionalized investments which has allowed me to diversify my portfolio. ",
            owner:owner2, 
            h5:"Amanda Mayfieldr",
            span:"Washington, D.C."
        },

        {
            img: star,
            p:"Akru has made estate planning very simple for my family. With a small portfolio of real estate, they’ve been able to accommodate our exact needs. Our children can do as they please with the property they will one day inherit.",
            owner:owner3, 
            h5:"Muhammed Ahmed",
            span:"Kalamazoo, MI"
        },
      ]
  return (
    <div className='investers'>
        <div className='invester_container'>
            <h2>AKRU is trusted and <br /> recognized by  top investors</h2>
            <div className='for_investers'>
 {
     owner.map((Investers) => (

           
               
               <div className='invester_details'>
                  <div className='stars'>
                   <img src={Investers.img} />
                   <img src={Investers.img} />
                   <img src={Investers.img} />
                   <img src={Investers.img} />
                   <img src={Investers.img} />
                 </div>

                 <div className='description'>
                     <p>{Investers.p}</p>
                 </div>

                  <div className='owner'>
                   
                   <div className='profile'>
                    <img src={Investers.owner} />
                   </div>

                   <div className='owner_name'>
                       <h5>{Investers.h5}</h5>
                       <span>{Investers.span}</span>
                   </div>
                  </div>

               </div>
          
             ))
            }
  </div>
        </div>
    </div>
  )
}

export default Investers