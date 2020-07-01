import React from "react";
import "./About-Me.css";

function About_Me() {
  return (
    // prettier-ignore
    <div className="About-Me" id="About-Me">
            <img alt="justin bresee" src="https://res.cloudinary.com/justin-bresee/image/upload/v1566508269/IMG_3137_if46xp_htbh9w.jpg"/>
            <div className="personal-info">
                <h1>Justin Bresee</h1>
                <h4>Frontend Web Devloper</h4>
            </div>
            <div className="cta">
              <div className="cta-content">
                <h1>Fast, Responsive, & Accessible Web Application Devlopment</h1>
                <a className="buttonLink" href="/#Portfolio">View Portfolio</a>
              </div>
            </div>
            <div className="bio">
              <h2 id="About">About</h2>
              <div>
                <div>
                  <h3>Utah State University</h3> 
                  <p>I attended and graduated from Utah State University with a B.S in Management Information Systems
                    with an emphasis in web application development. While working towards my degree I was able to 
                    secure my first employment as a web developer at the <a href="https://shingo.org/" target="_blank" rel="noopener noreferrer">Shingo Institute</a>.
                  </p>
                  <a href="/#Shingo.org" className="buttonLink">Learn More</a>
                </div>
                <img alt="utah state logo" src={require('../../images/utah-state.png')}/>
              </div>
              <div>
                <div>
                  <h3>The Shingo Institute</h3>
                  <p>After being brought on as a web developer at the <a href="https://shingo.org/" target="_blank" rel="noopener noreferrer">Shingo Institute</a> , I was tasked
                    with reducing the overhead and maintenance needed for the website. During my time working for the Shingo Institute, 
                    I reduced the cost of website maintenance by 50% through migrating the website to wordpress and creating an api that
                    would dynamically populate the site with content from their databases.<br/><br/> This simpler approach to the website allowed
                    for the website to be maintained by just one IT staff member as opposed the 4 that were previously required.  
                  </p>
                  <a href="/#Shingo.org" className="buttonLink">Learn More</a>
                </div>
                <img alt="utah state logo" src={require('../../images/flame.png')}/>
              </div>
              <div>
                <div>
                  <h3>The Church of Jesus Chirst of Latter-day Saints</h3>
                  <p>My current position is as a web development intern for <a href="https://www.comeuntochrist.org/" target="_blank" rel="noopener noreferrer">The Church of Jesus Christ of Latter-day Saints</a>.
                  I was assigned to work on the premire marketing website of the church which is a global organization. I assisted in many assignments during this time including
                  decreasing page load times by reducing redundancy in code, creating new web components for the church's custom javascript framework, and peer reviewing code to esure it met the highest standards of 
                  quality.
                  </p>
                  <a href="/#Church of Jesus Christ of Latter-day Saints" className="buttonLink">Learn More</a>
                </div>
                <img alt="utah state logo" src={require('../../images/church.png')}/>
              </div>
            </div>
        </div>
  );
}

export default About_Me;
