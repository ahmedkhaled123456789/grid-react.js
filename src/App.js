   
   import React, { useEffect } from 'react'
   import './App.css'
import Home from './pages/Home'
 

function App(){
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const revealPoint = 50;

      reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };

    const handleLoad = () => {
      const loadyElements = document.querySelectorAll('.loady');
      const loadyTwoElements = document.querySelectorAll('.loady-2');

      loadyElements.forEach(el => el.classList.add('active'));
      loadyTwoElements.forEach(el => el.classList.add('active'));
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleLoad);

    // Initial trigger
    handleScroll();
    handleLoad();

    // Clean up the event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  return(
<div className='app'>
  <Home/>
</div>


  )
}




export default App





















// import React, { Component } from 'react';
// import {Formik , Field} from 'formik';

// class App extends Component{
//   onSubmit = (values) =>{
//   console.log(values)
// }
// form = (props) =>{
//   return <form onSubmit={props.handleSubmit}>
//       <label>userName</label><br/>
//     <Field name="name"/>
//       <label>Gmail</label><br/>
//       <Field name="gmail" type="email"/>
//       <label>type</label><br/>

//       <Field name="type" component="select">
//         <option value="1">One</option>
//         <option value="2">two</option>
//         <option value="3">three</option>

//         </Field>
//         <label>check</label><br/>
//     <Field name="active" type="checkbox"/>
// <button type='submit'>send</button>

//     </form>
  
// }

//   render(){
//     return(
//       <div className="App">
//       <Formik
//       initialValues={{name:"", type:"", active:"false"}}
//       onSubmit={this.onSubmit}
//       render={this.form}
//       />
//     </div>
//     )
//   }
// } 

// export default App;
