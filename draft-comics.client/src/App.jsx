import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';
import LayOut from './component/Layout';
import Home from './page/Home';
import Preloader from './component/PreLoader';
import ComicsPage from './page/ComicsPage';
import Buttom from './component/Buttom';
import BookPage from './page/BookPage'; // ??????? ???? Book ???????
import ForumPage from './page/ForumPage';

function App() {
  return (
    <Router>
      <LayOut />
      <Preloader />
      <Routes>
        <Route
          path='/'
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path='/comics'
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ComicsPage />
            </motion.div>
          }
        />
        <Route
          path='/books'
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <BookPage /> {/* ??? ???? Book */}
            </motion.div>
          }
        />
        <Route
          path='/forum'
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ForumPage /> {/* ??? ???? Book */}
            </motion.div>
          }
        />
      </Routes>
      <Buttom />
    </Router>
  );
}

export default App;
