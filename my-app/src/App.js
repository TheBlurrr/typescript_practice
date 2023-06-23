import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

const TodoItem = ({ itemProp, handleChange, delTodo }) => {
  // ...
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        {/* ... */}
        <button>Edit</button>
        <button onClick={() => delTodo(itemProp.id)}>Delete</button>
        {/* ... */}
      </div>
    </li>
  );
};
export default TodoItem;
