import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import Explore from './components/Explore';
import { Provider } from 'react-redux';
import store from './features/store';
import Profile from './components/Profile';
import CreateQuiz from './components/CreateQuiz';
import TakeQuiz from './components/TakeQuiz';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/me' element={<Profile />} />
          <Route path='/create' element={<CreateQuiz />} />
          <Route path='/explore/:id' element={<TakeQuiz />} />
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Provider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
