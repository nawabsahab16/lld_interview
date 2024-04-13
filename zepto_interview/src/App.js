import './App.css';
import Folder from './folder';
import { files } from './data';

function App() {
  return (
    <div className="App">
      <h1> Folder Sturcture </h1>
      <Folder files={files}/>
    </div>
  );
}

export default App;
