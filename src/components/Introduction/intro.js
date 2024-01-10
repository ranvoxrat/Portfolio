import React from 'react';
import './style.css';
import bg from '../../assets/Feliciano.png';
import { Link } from 'react-scroll';
const Intro = () => {
  return (
    <section id="intro">
      
        <div className="content">
          <span className="hello">Hello!</span>
          <span className="text2">I'm Mark Feliciano</span>
          <span className="text1">Full-stack <span className="web">Web Developer</span></span>
          <p>I am a skilled programmer. I possess a deep understanding of various programming languages and frameworks.
             My problem-solving abilities are exceptional, allowing me to tackle complex coding challenges with ease.</p>
          <Link><button className="btnHire">Hire me!</button></Link>
        </div>    
        <div className="shadow">
        <img src={bg} className="bg"></img>
        </div>
    </section>
  )
}

export default Intro;
