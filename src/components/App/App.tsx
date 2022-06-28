import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import About from '../About/About';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';
import { useAppSelector } from '../../hooks/redux';

function App() {
  const {token} = useAppSelector(state => state.postReducer);
  return (
    <div className="app" data-testid="app">
      <BrowserRouter>
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            {!token ?
              <Route path="/" element={<Login />} />
              :
              <Route path="/" element={<Dashboard />} />
            }
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
