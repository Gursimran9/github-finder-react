import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <GitHubIcon />
        {title}
      </h1>
    </nav>
  );
};

export default Navbar;
