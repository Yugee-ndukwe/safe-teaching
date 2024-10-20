import './App.css';
import Box from './Components/Box';
import Configuration from './Components/Configuration';
import MyBooks from './Components/MyBooks/books';
import Resource from './Components/Resources/resource';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
          <Routes>
              <Route path='/ e'/>
          </Routes>
      </BrowserRouter> */}
      <Box/>
      <Configuration/>
      <Resource/>
      <MyBooks/>
     
    </div>
  );
}

export default App;
