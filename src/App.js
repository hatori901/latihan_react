import logo from './logo.svg';
import './index.css';
import './App.css';

function Navbar() {
    return (
      <div className="py-5">
        <a href="#" className="text-indigo-500 font-bold px-4 py-3">Home</a>
        <a href="#" className="text-indigo-500 font-bold px-4 py-3">Projects</a>
        <a href="#" className="text-indigo-500 font-bold px-4 py-3">Contact</a>
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white px-3 py-2 rounded-md">Hire Me</button>
      </div>
    );
}

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, My name is Erwin Alam
        </p>
      </header>
    </div>
  );
}

export default App;
