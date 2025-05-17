import './App.css';
import Square from './components/Shape.jsx';

function App() {
  return (
    <div className="App">
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square num={9}/>
      </div> 
    </div>
  );
}

export default App;
