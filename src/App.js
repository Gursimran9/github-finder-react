import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/layout/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState('');

  const search = async (text) => {
    setLoading(true);
    const res =
      await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUsers(res.data.items);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  const handleAlert = (msg, type) => {
    setAlert({ msg, type });
  };

  return (
    <div className='App'>
      <Navbar title='Github Finder' />
      <div className='container'>
        <Alert alert={alert} />
        <Search
          search={search}
          clearUsers={clearUsers}
          showClear={users.length > 0 ? true : false}
          handleAlert={handleAlert}
        />
        <Users loading={loading} users={users} />
      </div>
    </div>
  );
};

export default App;
