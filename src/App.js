import logo from './logo.svg';
import './App.css';
import MainRoutes from './Routes/MainRoutes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter><MainRoutes/></BrowserRouter>
     
    </div>
  );
}

export default App;
