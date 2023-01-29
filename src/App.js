import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/home';
import Navbar from './component/navbar';
import {Provider} from "react-redux"
import {store} from "./redux/store"

function App() {
  return (
    <Provider store={store}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Provider>
  );
}

export default App;
