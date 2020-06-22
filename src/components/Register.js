import React from 'react';

class Register extends React.Component {
  doRegister = () => {
    
  }

  render() {
    return (
      <button
        type="button"
        onClick={this.doRegister}
      >
        Register
      </button>
    );
  }
}

export default Register;
