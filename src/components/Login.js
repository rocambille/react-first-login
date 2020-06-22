import React from 'react';

class Login extends React.Component {
  doLogin = () => {

  }

  render() {
    return (
      <button
        type="button"
        onClick={this.doLogin}
      >
        Login
      </button>
    );
  }
}

export default Login;
