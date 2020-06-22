import React from 'react';

class Logout extends React.Component {
  doLogout = () => {
    
  }

  render() {
    return (
      <button
        type="button"
        onClick={this.doLogout}
      >
        Logout
      </button>
    );
  }
}

export default Logout;
