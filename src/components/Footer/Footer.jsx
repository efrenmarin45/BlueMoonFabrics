import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="#pablo">Home</a>
              </li>
              <li>
                <a href="https://www.bluemoonfabrics.com/">Company</a>
              </li>
            </ul>
          </nav>
      
        </Grid>
      </footer>
    );
  }
}

export default Footer;
