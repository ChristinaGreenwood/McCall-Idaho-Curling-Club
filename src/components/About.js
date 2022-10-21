import React from "react";

function About() {
  return (
    <div className='about-wrapper'>
      <img src='src/images/about-img.png' className='about-image'></img>
      <div className='about-text'>
        <div className='bold'>McCall Curling Club:</div>{" "}
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
          suscipit eaqueLorem, ipsum dolor sit amet consectetur adipisicing
          elit. Molestias aut, repellat ipsum facere voluptate dicta ❤️ 🏆
        </p>
        <a href='https://m.facebook.com/mccallcurlingclub/'>
          <button>Register for the season</button>
        </a>
        <div className='about-fb'>
          <img src='src/images/Josh-logo-1.001.png'></img>
          <a href='https://m.facebook.com/mccallcurlingclub/'>
            Check Us Out On facebook
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
