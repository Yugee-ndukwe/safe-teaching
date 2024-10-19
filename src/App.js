import './App.css';
import Box from './Components/Box';
import Configuration from './Components/Configuration';
import MyBooks from './Components/MyBooks/books';
import Resource from './Components/Resources/resource';

function App() {
  return (
    <div className="App">
      <Box/>
      <Configuration/>
      <Resource/>
      <MyBooks/>
     
    </div>
  );
}

export default App;
