
import React from 'react'
import "../css/header.css";
import RestaurantIcon from '@mui/icons-material/Restaurant';
function Header() {
  return (
    <div className='Header'>
      <div className="header__style">
        <RestaurantIcon></RestaurantIcon>
        <h3>Food's Restaurant</h3>
      </div>
    </div>
  )
}

export default Header;
