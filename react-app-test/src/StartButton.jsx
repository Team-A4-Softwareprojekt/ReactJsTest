import React from 'react';
import './Button.css'; // Import CSS file for styling

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  handleMouseEnter = () => {
    this.setState({ hovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ hovered: false });
  };

  render() {
    const buttonColor = this.state.hovered ? 'grey' : 'darkgrey';

    return (
      <button
        className="custom-button"
        style={{ backgroundColor: buttonColor }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        Start your journey
      </button>
    );
  }
}

export default CustomButton;
