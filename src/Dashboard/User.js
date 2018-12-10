import React, { Component } from 'react';

class User extends Component {

  logout = e => {
    this.props.history.push('/about')
  }

  render() {
    
    return (
        <div>
          User

          <button onClick={this.logout}>
            Logout
          </button>
          
        </div>

    );
  }
}

export default User;
