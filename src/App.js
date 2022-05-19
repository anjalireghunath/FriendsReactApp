import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import AddFriend from './components/AddFriend';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/View';

function App() {
  return (
   <div>
     <BrowserRouter>
     <Routes>
       <Route path='/' exact element={<AddFriend/>}/>
       <Route path='/view' exact element={<View/>}/>
     </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
