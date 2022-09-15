//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import Create from './Create';
import TaskDetails from './TaskDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className='App container'>
        <Nav />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/tasks/:id' element={<TaskDetails />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
