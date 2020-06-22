import React, {
  useState,
} from 'react';
import './App.css';

import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';
import Register from './components/Register';

function App() {
  const [isConnected, setConnected] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {isConnected ? (
          <>
            <Logout setConnected={setConnected} />
            <Profile />
          </>
        ) : (
          <>
            <Login setConnected={setConnected} />
            <Register setConnected={setConnected} />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
