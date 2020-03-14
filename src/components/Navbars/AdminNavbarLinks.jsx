
// links that go on top of the navbar

import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class AdminNavbarLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">4</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>
          <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}>Yard Moved to Warehouse</MenuItem>
            <MenuItem eventKey={2.2}>Andy Made Changes</MenuItem>
            <MenuItem eventKey={2.3}>Task Completed</MenuItem>
            <MenuItem eventKey={2.4}>Password Changed</MenuItem>
            
          </NavDropdown>
          {/* Search action needs to be linked to Table List */}
          <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="/admin/user">
            Account
          </NavItem>
     
{/* When logging out - user will be prompted back to log in window to authenticate */}

          <NavItem eventKey={3} href="#">
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
