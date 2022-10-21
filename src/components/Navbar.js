import React from "react";

function Navbar() {
  return (
    <div className='wrap'>
      <div className='nav-link'>
        <a
          href='https://m.facebook.com/mccallcurlingclub/'
          target='_blank'
          rel='noreferrer'
        >
          PURCHASE TICKETS
        </a>
      </div>
      <div className='bg'>
        <video
          className='video-bg'
          src='src/images/1234.mp4'
          autoPlay
          muted
          loop
          type='video/mp4'
        />
        {/* <iframe src="src/images/istockphoto-498242927-640_adpp_is.mp4" 
                frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" 
                style="position:absolute;top:0;left:0;width:100%;height:100%;" data-ready="true"></iframe> */}
        <div className='nav-wrapper'>
          <div className='logo'>
            <img className='img' src='src/images/Josh-logo-1.001.png'></img>
          </div>
          <a className='phone-link' href='tel:(208) 880-7903'>
            Call or text (208) 880-7903
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
