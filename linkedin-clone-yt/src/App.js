import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Login';
function App() {
  const user = useSelector(selectUser)
  console.log(user)
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {!user ? <Login /> : <div className="app__body">
        <Sidebar></Sidebar>
        <Feed></Feed>
        {/* Feed */}

        {/* Widget */}
      </div>}

    </div>
  );
}

export default App;
