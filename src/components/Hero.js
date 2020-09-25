import React, {Fragment} from 'react';

function Hero(){
    return(
      <Fragment>
        <div className="jumbotron text-center">
  <h1>Company</h1> 
  <p>We specialize in blablabla</p> 
  <form className="form-inline">
    <div className="input-group">
      <input type="email" className="form-control" size="50" placeholder="Email Address" required />
      <div className="input-group-btn">
        <button type="button" className="btn btn-danger">Subscribe</button>
      </div>
    </div>
  </form>
</div>
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
<div id="services" className="container-fluid text-center">
  <h2>SERVICES</h2>
  <h4>What we offer</h4>
  <br/>
  <div className="row slideanim">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-off logo-small"></span>
      <h4>POWER</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-heart logo-small"></span>
      <h4>LOVE</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-lock logo-small"></span>
      <h4>JOB DONE</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
  </div>
  <br/><br/>
  <div className="row slideanim">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-leaf logo-small"></span>
      <h4>GREEN</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-certificate logo-small"></span>
      <h4>CERTIFIED</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-wrench logo-small"></span>
      <h4 style={{color:"#303030"}}>HARD WORK</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
  </div>
</div>
</Fragment>
    );
}

export default Hero;