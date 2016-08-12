import React from 'react';

class Logo extends React.Component {
  render() {
    const logoWidth = 101;
    const logoStyle = {
      height: 101,
      width: 85,
      display: 'block',
      textAlign: 'left',
      overflow: 'hidden',
      marginTop: 0.45 * screen.height - logoWidth,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 35,
    };
    return (
      <img src="i/logo.png" style={logoStyle} />
    );
  }
}

export default Logo;
