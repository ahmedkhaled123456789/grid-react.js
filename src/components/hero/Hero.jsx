import React from 'react'
import './Hero.css'
const Hero = () => {
  const divStyle = {
    height: '700px',
    width: '700px',
    backgroundColor: 'rgba(98, 0, 234, 0.4)', // Assuming primary color is #6200ea
    position: 'absolute',
    top: '-50%',
    right: '0',
    borderRadius: '1.5rem', // 3xl in Tailwind is 1.5rem
    transform: 'rotate(45deg)',
    zIndex: -8
  };
  return (
    < >
    
    <section className="hero container">
      <div className="back">

      </div> 
       <div style={divStyle}></div>
      <div className="banner">
        <h1>Combine <span className="highlight">  <span >fine</span> </span> images</h1>
        <p>To represent a product</p>
      </div>
      
      <div className="image-grid">
        <div className="left_grid loady">
          <div className="description">
            <p>
              use mixed grid imagery,
              replace with your own photos
              and descriptions
            </p>
           </div>
          <div className="description_grid">
            <h2>
              We aimed to deliver HQ 
             
            </h2>
            <h3>
              templates for Figma
            </h3>
            <p>
               used by 123 people
            </p>
          </div>
          <div className="btn">
            <button className="read_more">Read More</button>

          </div>
        </div>
        <div className="right_grid">
       <div className="top_grid">
        <div className="right">
          <div className="title">Image Title</div>
        </div>
        <div className="left loady-2">
          <p>This is a multipurpose grid, it fits for portfolio, services, or agency websites</p>
<div className="card">
  <div className="card-image card_one">  </div>
  <div className="card-image card_two"> </div>

</div>
        </div>
       </div>
       <div className="bottom_grid">
      <div className="content">
        <div className="card_left"></div>
        <div className="card_center"> <div class="title">Caption</div> </div>
      </div>
        <div className="card_right loady-2"></div>
       </div>
        </div>


        
      </div>
    </section>
     </ >
  )
}

export default Hero