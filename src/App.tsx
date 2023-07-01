
import { RouterProvider } from 'react-router-dom';
import './App.css';
import mainRouter from './MainRouter/MainRouter';
import Header from './common/Header';

function App() {
  return (
    <div>
       <RouterProvider router={mainRouter} />
    </div>
  );
}

export default App;
