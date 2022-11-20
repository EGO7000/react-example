import logo from './logo.svg';
import './App.scss';
import List from './components/List';

// входной массив может состоять из любых значений:
let array = [
  'fistElement',
  'secondElement',
  'secondElement',
  0,
  1,
  '',
  ' ',
  null,
  undefined,
  'thirdElement',
];

// его необходимо нормализировать
// array = array.map((item) => String(item));
array = array.map((item) => `${item}`); // вероятно так быстрее

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="App-title">useEffect hook example</div>
    </header>
    <main className="App-main" role="main">
      <div className="App-list">
        <List value={array} />
      </div>
    </main>
  </div>
);

export default App;
