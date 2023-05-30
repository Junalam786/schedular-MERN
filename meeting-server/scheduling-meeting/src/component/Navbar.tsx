import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import WysiwygRoundedIcon from '@mui/icons-material/WysiwygRounded';
import './Navbar.css';

interface NavbarProps {
  onSearch: (searchTerm: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  return (
    <nav className="navbar" >

    <div className="left-side">
    <img src="logopic.png" alt="Logo" className="logo" />
 
      <form className="search-form" onSubmit={(e) => {
          e.preventDefault();
          onSearch(e.currentTarget.search.value);
          }}>
        <input type="text" name="search" className="search" placeholder="🔍 Search Clients" />
    
      </form>
    </div>
    <div className="right-side">
    <ul className="contents" style={{ listStyleType: 'none', padding: '0'}}>
      <li style={{ display: 'flex', alignItems: 'center',fontSize: '14px'  }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <AddIcon style={{ marginRight: '8px' }} />
          Create
        </a>
      </li>
      <li style={{ display: 'flex', alignItems: 'center' ,fontSize: '14px' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <WysiwygRoundedIcon style={{ marginRight: '8px' }} />
          Request
        </a>
      </li>
      <li style={{ display: 'flex', alignItems: 'center',fontSize: '14px' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <ChatBubbleOutlinedIcon style={{ marginRight: '8px' }} />
          Message
        </a>
      </li>
    </ul>
      <button className='btn'>set meeting</button>
    </div>
  </nav>
  
  );
};

export default Navbar;
