import React, { Component } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <GitHubIcon />
          Navbar
        </h1>
      </nav>
    );
  }
}

export default Navbar;
