import React, { Fragment } from 'react';


const Footer = () =>{
    return(
      <Fragment>
<footer className="container-fluid text-center footer-block">
<div class="pt-4">
<a href="#myPage" title="To Top">
    <span className="glyphicon glyphicon-chevron-up"></span>
  </a>
      <a class="btn btn-outline-white" href="http://odbc.live" target="_blank" role="button">Start
      
        <i class="fas fa-graduation-cap ml-2"></i>
      </a>
    </div>
 
    <hr class="my-4"/>

    <div class="pb-4">
      <a href="https://www.facebook.com/" target="_blank">
        <i class="fab fa-facebook-f mr-3"></i>
      </a>

      <a href="https://twitter.com/" target="_blank">
        <i class="fab fa-twitter mr-3"></i>
      </a>

      <a href="https://www.youtube.com/" target="_blank">
        <i class="fab fa-youtube mr-3"></i>
      </a>

      <a href="https://plus.google.com/" target="_blank">
        <i class="fab fa-google-plus-g mr-3"></i>
      </a>

      <a href="https://dribbble.com/" target="_blank">
        <i class="fab fa-dribbble mr-3"></i>
      </a>

      <a href="https://pinterest.com/" target="_blank">
        <i class="fab fa-pinterest mr-3"></i>
      </a>

      <a href="https://github.com/mdbootstrap/" target="_blank">
        <i class="fab fa-github mr-3"></i>
      </a>

      <a href="http://codepen.io/mdbootstrap/" target="_blank">
        <i class="fab fa-codepen mr-3"></i>
      </a>
    </div>
    
    <div class="footer-copyright py-3">
    © 2018 Copyright:
      <a href="https://odbc.live" target="_blank"> ODBC</a>
    </div>

</footer>
</Fragment>
    );
}

export default Footer;