
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Men from './pages/Men'
import Kids from './pages/Kids'
import Beauty from './pages/Beauty'
import Women from './pages/Women'
import Living from './pages/Living'
import Details from './pages/Details'
import { Provider } from 'react-redux'
import store  from "./components/store"
import CartDetails from './cart/cartdetails';


function App() {
  return (
<Provider store={store}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/beauty' element={<Beauty />} />
        <Route path='/living' element={<Living />} />
        <Route path='/details' element={<Details />} />
        <Route path='/CartDetails' element={<CartDetails />} />
      </Routes>
    </Provider>
  );
}

export default App;
