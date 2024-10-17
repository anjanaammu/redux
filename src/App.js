import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import {store} from './Component/Store';
import Cart from './Component/Cart';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
   
   <Cart/>
    </div>
    </Provider>
  );
}

export default App;