import React from 'react';

class Profile extends React.Component {
  state = {
    name: null
  };

  componentDidMount() {
    
  }

  render() {
    return (
      <h1>
        Hello {this.state.name ?? 'je ne sais pas qui vous êtes'}
      </h1>
    );
  }
}

export default Profile;
