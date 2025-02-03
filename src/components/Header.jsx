import React from 'react';
import StacklineLogo from '../../src/assets/stackline_logo.svg';

function Header() {
	const styles = {
		headerStyle: {
			padding: '10px', 
			background: '#004080'
		}
	}
  return (
    <header style={styles.headerStyle}>
      <img src={StacklineLogo} alt="Stackline Logo" height={40} />
    </header>
  );
}

export default Header;
