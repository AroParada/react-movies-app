import React, { Component } from "react";
import { Linkedin } from 'grommet-icons';

class Footer extends Component {

  render() {
    return (
      <footer class="page-footer">
          <footer class="footer-copyright">
            <div  class="container">
            © 2021 Made by Aro Parada
            <a class="grey-text text-lighten-4 right" href="#!">
              
              <Linkedin color="white" />
              </a>
            </div>
          </footer>
        </footer>


          
        
    )
  }
}

export default Footer;