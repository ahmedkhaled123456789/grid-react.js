import React from 'react'
import './Pricing.css'
const Pricing = () => {
  return (
    < >
      <section className="pricing container reveal">
      <h2>Affordable pricing</h2>
      <p>Bill me <span className="Monthly">Monthly</span> - Yearly</p>
      <div className="pricing-options">
        <div className="pricing-card">
          <div className="info card_1">

          <h3>Like a Pussy</h3>
           <p> Free <span>/FOREVER</span> </p>
           <ul>
            <li><i className="fa-solid fa-check"></i>Components-driven system</li>
            <li><i className="fa-solid fa-check"></i>Sales-boosting landing pages</li>
            <li><i className="fa-solid fa-check"></i>Awesome Feather icons pack</li>
          </ul>
          </div>
         
          <div className="btn_offer">

          <button>Try for free</button>
          </div>
        </div>
        <div className="pricing-card">
          <div className="info card_2">

           <h3><span><i className="fa-solid fa-user"></i> Individual </span> <span className="FERTI">FERTI</span></h3>
          <p>$24 <span> / MONTH</span></p>
          <ul>
            <li><i className="fa-solid fa-check"></i>Components-driven system</li>
            <li><i className="fa-solid fa-check"></i>Sales-boosting landing pages</li>
            <li><i className="fa-solid fa-check"></i>Awesome Feather icons pack</li>
            <li><i className="fa-solid fa-check"></i>hemed into 3 different styles</li>
            <li><i className="fa-solid fa-check"></i> Will help to learn Figma</li>

          </ul>
          </div>
          
          <div className="btn_offer">
            <button className="active">Regular license</button>
          </div>
         
        </div>
        <div className="pricing-card">
          <div className="info card_3">
            <h3><i className="fa-solid fa-user-group"></i> Corporate</h3>
          <p>$12 <span>/ EDITOR</span></p>
          <ul>
            <li><i className="fa-solid fa-check"></i>Components-driven system</li>
            <li><i className="fa-solid fa-check"></i>Sales-boosting landing pages</li>
            <li><i className="fa-solid fa-check"></i>Awesome Feather icons pack</li>
            <li><i className="fa-solid fa-check"></i>Themed into 3 different styles</li>
          </ul>
          </div>
          
         
          <div className="btn_offer">

          <button>Extended license</button>
          </div>
        </div>
      </div>
    </section>  
     </ >
  )
}

export default Pricing