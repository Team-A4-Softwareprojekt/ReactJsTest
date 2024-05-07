import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook for navigation
import './Button.css'; // Import CSS file for styling

const CustomButton = () => {
  const history = useHistory();

  const handleClick = () => {
    // Navigate to the "/newPage" route when the button is clicked
    history.push('/newPage');
  };

  const handleMouseEnter = () => {
    // Handle mouse enter event
    // You can implement custom behavior if needed
  };

  const handleMouseLeave = () => {
    // Handle mouse leave event
    // You can implement custom behavior if needed
  };

  const buttonColor = 'darkgrey'; // Assuming default color is darkgrey

  return (
    <button
      className="custom-button"
      style={{ backgroundColor: buttonColor }}
      onClick={handleClick} // Handle button click event
      onMouseEnter={handleMouseEnter} // Handle mouse enter event
      onMouseLeave={handleMouseLeave} // Handle mouse leave event
    >
      Start your journey
    </button>
  );
};

export default CustomButton;
