import './App.css';
import BookDetails from './Components/BookDetails/bookDetails';
import Box from './Components/Box';
import Configuration from './Components/Configuration';
import MyCourses from './Components/Courses/courses';
import MyBooks from './Components/MyBooks/books';
import Resource from './Components/Resources/resource';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TotalEarnigs from './Components/TotalEarnings/totalEarnings';
import Transactions from './Components/Transactions/transaction';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path='/dashboard' element={<Box/>}/>
              <Route path='/configuration' element={<Configuration/>}/>
              <Route path='/resource' element={<Resource/>}/>
              <Route path='/' element={<MyBooks/>}/>
              <Route path='/bookDetails' element= {<BookDetails/>}/>
              <Route path='/courses' element={<MyCourses/>}/>
              <Route path='/totalEarnings' element={<TotalEarnigs/>}/>
              <Route path='/transaction' element={<Transactions/>}/>

          </Routes>
      </BrowserRouter>
      
      
     
    </div>
  );
}

export default App;
