import './App.css';
import { Route, Routes } from 'react-router-dom';

// importing the component from the library
import { Products } from 'products';
import { Orders } from 'orders';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello world</h1>}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
    </Routes>
  );
}

export default App;
