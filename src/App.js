import logo from './logo.svg';
import './App.css';
import Home from './Homepage';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Value from './Value';
import Send from './Send';
import Confirm from './Confirm';
import Receipt from './Receipt';

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/value" element={<Value/>}/>
        <Route path="/send/:value" element={<Send/>}/>
        <Route path="/confirm/:value" element={<Confirm/>} />
        <Route path="/receipt/:value/:address" element={<Receipt/>} />
      </Routes>
       
    </div>
  );
}

export default App;
