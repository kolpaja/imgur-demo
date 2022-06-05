import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './components/counter';
import { store } from './redux/store';
import './styles/index.scss';
import './styles/index.css';
import Home from './screens/Home';
import About from './screens/About';
import NotFound from './components/NotFound';
import GlobalLayout from './components/GlobalLayout';

function App() {
  return (
    <Provider store={store}>
      <GlobalLayout>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </GlobalLayout>
    </Provider>
  );
}

export default App;
