import './App.css';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';

export default function App() {
  document.title = 'Жилфонд';

  return (
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
  );
}