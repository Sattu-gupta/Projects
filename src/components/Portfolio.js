import React from 'react';




const Portfolio = () => {
    return(
<div id="portfolio" className="container-fluid text-center bg-grey">
  <h2>Portfolio</h2><br/>
  <h4>What we have created</h4>
  <div className="row text-center slideanim">
    <div className="col-sm-4">
      <div className="thumbnail">
        <img src="img1.jpeg" alt="Paris" width="400" height="300" />
        <p><strong>Paris</strong></p>
        <p>Yes, we built Paris</p>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="thumbnail">
        <img src="/img2.jpeg" alt="New York" width="400" height="300" />
        <p><strong>New York</strong></p>
        <p>We built New York</p>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="thumbnail">
        <img src="download.jpg" alt="San Francisco" width="400" height="300" />
        <p><strong>San Francisco</strong></p>
        <p>Yes, San Fran is ours</p>
      </div>
    </div>
  </div><br/>
  </div>
    );
}

export default Portfolio;