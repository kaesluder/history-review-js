import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import HistoryTable from './HistoryTable';

function App() {
  const [count, setCount] = useState(0);
  const [historyItems, setHistoryItems] = useState([]);

  const handleHistoryResults = function (results) {
    setHistoryItems(results);
    consoleLog(results);
  };

  useEffect(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    chrome.history.search(
      { text: '', startTime: d, maxResults: 500 },
      handleHistoryResults
    );
  }, []);

  const testItems = [{ id: 'foo', title: 'bar' }];

  return (
    <div className="App">
      <div>
        <HistoryTable items={historyItems} />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
