import React from 'react'
import './Features.css'
const Features = () => {
  return (<> 
  <section className="features-section container reveal">
  <div className="intro">
    <h2>Delivering good designs <span>since 1954</span></h2>
    <p>We're the first multi-purpose design kit solutions for businesses.   We help you bridge gaps between your needs and solutions.</p>
  </div>
  <div className="features">
    <div className="feature">
      <div className="info">

      <div className="icon" style={{background: "#e57373"}}><i className="fa-regular fa-thumbs-up"></i></div>
      <h3>Swap the icon</h3>
      <p>You can toggle any icon within instances and customize  styles.</p>
      </div>
      <a href="#" className="learn-more">Learn more</a>
    </div>
    <div className="feature">
      <div className="info">

      <div className="icon" style={{background: "#81c784"}}><i className="fa-solid fa-bolt"></i></div>
      <h3>Detach if need</h3>
      <p>Detaching the block, you can control and configure   styles.</p>
      </div>
      <a href="#" className="learn-more">Learn more</a>
    </div>
    <div className="feature">
      <div className="info">

      <div className="icon" style={{background: "#64b5f6"}}><i className="fa-brands fa-linkedin-in"></i></div>
      <h3>Toggle icons</h3>
      <p>Detaching the block, you can control and configure styles.</p>
      </div>
      <a href="#" className="learn-more">Learn more</a>
    </div>
    <div className="feature">
      
      <div className="info">
        <div className="icon" style={{background:"#ba68c8"}}><i className="fa-solid fa-suitcase"></i></div>
        <h3>Replace a title</h3>
        <p>You can toggle any icon within instances and customize styles.</p>
      </div>
      
      <a href="#" className="learn-more">Learn more</a>
    </div>
  </div>
</section>
    </>
  )
}

export default Features