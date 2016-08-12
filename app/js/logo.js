import React from 'react';

class Logo extends React.Component {
  render() {
    const logoWidth = 210;
    const logoStyle = {
      display: 'block',
      textAlign: 'left',
      overflow: 'hidden',
      marginTop: 0.45 * screen.height - logoWidth,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 50,
    };
    return (
      <img src="i/logo.png" style={logoStyle} />
    );
  }
}

export default Logo;
