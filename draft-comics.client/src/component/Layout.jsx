import React, { useState, useEffect } from 'react';
import './Layout.css';
import logo from '../Logo.png';
import SearchBar from './SearchBar';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';
import Home from '../page/Home';
import ComicsPage from '../page/ComicsPage';
import bookImage from '../static/img/book.png';
import comicImage from '../static/img/comic-book.png';
import audiobookImage from '../static/img/audiobook.png';
import BookPage from '../page/BookPage';
import ForumPage from '../page/ForumPage';

function LayOut() {
  const location = useLocation();
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(window.innerWidth > 644);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setSearchVisible(window.innerWidth > 644);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleNav = () => {
    console.log('Current sideNavOpen state:', sideNavOpen); // تحقق من قيمة الحالة قبل التغيير
    setSideNavOpen(!sideNavOpen);
    console.log('New sideNavOpen state:', !sideNavOpen); // تحقق من قيمة الحالة بعد التغيير
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <header>
        <div className='title'>
          <Link to='/'>
            <img src={logo} className='logo' alt='Logo' />
          </Link>
        </div>

        {searchVisible ? (
          <div className='normal-search'>
            <SearchBar onChange={handleSearch} value={searchTerm} />
          </div>
        ) : (
          <div className='nav-search'>
            {/* يمكن إضافة وظائف البحث هنا إذا لزم الأمر */}
          </div>
        )}

        <span className='menu-icon' onClick={toggleNav}>
          &#9776;
        </span>

        <div id='sideNav' className={`side-nav ${sideNavOpen ? 'open' : ''}`}>
          <SearchBar onChange={handleSearch} value={searchTerm} />
          <button className='close-btn' onClick={toggleNav}>
            &times;
          </button>
          <Link to='/books' onClick={toggleNav}>
            Books
          </Link>
          <Link to='/comics' onClick={toggleNav}>
            Comics
          </Link>
          <Link to='/forum' onClick={toggleNav}>
            Forum
          </Link>
        </div>

        <nav className='nav'>
          <ul>
            <li>
              <Link to='/books'>
                <div className='imge'>
                  <img src={bookImage} alt='book' className='ico' />
                  <div className='content'>
                    <h2>Books</h2>
                  </div>
                </div>
              </Link>
              <ul className='dropdown'>
                <div className='arrow'></div>
                <li>
                  <Link to='/books/novels'>Novels</Link>
                </li>
                <li>
                  <Link to='/books/translated'>Translated Books</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/comics'>
                <div className='imge'>
                  <img src={comicImage} alt='comic ico' className='ico' />
                  <div className='content'>
                    <h2>Comics</h2>
                  </div>
                </div>
              </Link>
              <ul className='dropdown'>
                <div className='arrow'></div>
                <li>
                  <Link to='/comics/Cartoonia'>Cartoonia</Link>
                </li>
                <li>
                  <Link to='/comics/translated'>Translated Comics</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/forum'>
                <div className='imge'>
                  <img
                    src={audiobookImage}
                    alt='audiobook ico'
                    className='ico'
                  />
                  <div className='content'>
                    <h3>Forum</h3>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <PageTransition
        preset='moveToLeftFromRight'
        transitionKey={location.pathname}
      >
        <Routes location={location}>
          <Route path='/' element={<Home />} />
          <Route path='/comics' element={<ComicsPage />} />
          <Route path='/books' element={<BookPage />} />
          <Route path='/forum' element={<ForumPage />} />
        </Routes>
      </PageTransition>
    </>
  );
}

export default LayOut;
