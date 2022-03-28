import React, { Component } from "react";
import { Linkedin } from "grommet-icons";
import { Anchor } from "grommet";

class Footer extends Component {
  render() {
    return (
      <footer class="page-footer">
        <footer class="footer-copyright">
          <div class="container">
            © 2021 Made by Aro Parada
            <a class="grey-text text-lighten-4 right" href="#!">
              <Anchor
                href="https://www.linkedin.com/in/aroparada/"
                target="_blank"
                rel="noopener"
                color="plain"
                icon={<Linkedin color="white" />}
              />
            </a>
          </div>
        </footer>
      </footer>
    );
  }
}

export default Footer;
