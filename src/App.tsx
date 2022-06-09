import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './redux/store';

import GlobalLayout from './components/GlobalLayout';
import Gallery from './screens/Gallery';
import GalleryView from './screens/Gallery/GalleryView';
import User from './screens/User';
import About from './screens/About';
import NotFound from './components/NotFound';

import './styles/index.scss';
import './styles/index.css';

//user profile route is extra, so we need to add it to the routes
//gallery or image query is extra, so we need to add it to the routes
//login or sign up is extra(& forget password), so we need to add it to the routes

function App() {
  return (
    <Provider store={store}>
      <GlobalLayout>
        <Router>
          <Routes>
            <Route path='/' element={<Gallery />} />
            <Route path='/about' element={<About />} />
            <Route path='/user/:userId' element={<User />} />
            <Route path='/gallery/:galleryId' element={<GalleryView />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </GlobalLayout>
    </Provider>
  );
}

export default App;
