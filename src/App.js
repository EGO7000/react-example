import logo from './logo.svg';
import './App.scss';
import List from './components/List';

const array = [
  'fistElement',
  'secondElement',
  'thirdElement',
];
const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="App-title">
        useEffect hook example
      </div>
    </header>
    <main className="App-main" role="main">
      <div className="App-list">
        <input
          type="text"
          placeholder="Введите строку поиска..."
        />
        <List value={array} />
      </div>
    </main>
  </div>
);

export default App;
