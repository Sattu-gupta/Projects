import React, { Fragment } from 'react';

const About = () =>{
    return(
    //  <div>
    <Fragment>
        <div id="about" className="container-fluid">
  <div className="row">
    <div className="col-sm-8">
      <h2>WELCOME TO THE ODBC</h2>
      <h3>Inovative Software Company</h3>
      <p className="mt-4" style={{alignItems:"center"}}>Gone are the days when a few word brands help the monopoly of high end elite software.
       They had their digital solution, for online accounting, reporting, production, &amp; services. Web application in decision making,<br/>
       strategy planning, marketing and overall presence of their product in the market.</p>
      <br/><button className="btn btn-default btn-lg">Get in Touch</button>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-signal logo"></span>
    </div>
  </div>
</div>

<div className="container-fluid bg-grey">
  <div className="row">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-globe logo slideanim"></span>
    </div>
    <div className="col-sm-8">
      <h2>Our Values</h2><br/>
      <h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br/>
      <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</div>
</Fragment>
// </div>
    );
}

export default About;