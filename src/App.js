import { useState } from 'react';
import { UsersContext } from './context/context';
import './App.css';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';

export default function App() {
  document.title = 'Жилфонд';

  const [users, setUsers] = useState({
    search: '',
    list: null,
    active: null,
    isLoading: false,
  });

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <div className="App">
        <header className="header">
          <a className="logo" href="/">Жилфонд</a>
          <span>Пользователь</span>
        </header>

        <main className="container">
          <Sidebar />
          <Profile />
        </main>
      </div>      
    </UsersContext.Provider>
  );
}