import logo from './logo.svg';
import './App.scss';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="App-title">useEffect hook example</div>
    </header>
    <main className="App-main" role="main">
      <div>Some components</div>
    </main>
  </div>
);

export default App;
