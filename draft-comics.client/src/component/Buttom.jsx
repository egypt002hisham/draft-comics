import React from 'react';
import './Buttom.css';
import FacebookIcon from '../static/ico/1490889652-facebook_82510.png'; // أيقونة فيسبوك
import YoutubeIcon from '../static/ico/1491580651-yumminkysocialmedia28_83061.png'; // أيقونة يوتيوب
import InstagramIcon from '../static/ico/3721672-instagram_108066.png'; // أيقونة إنستاجرام

const Buttom = () => {
  const Name = '@Draft Comics';
  const Social_Media = {
    Facebook: 'Facebook',
    Youtube: 'YouTube',
    Instagram: 'Instagram',
  };

  return (
    <div className='Buttomm'>
      <div className='Coperight'>{Name} © 2024</div>
      <div className='Social_Media'>
        <div className='items'>
          <a
            href='https://www.facebook.com/people/Draft-Comics/61565596565133/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='social-icon' src={FacebookIcon} alt='Facebook' />
            <span>{Social_Media.Facebook}</span>
          </a>
        </div>
        <div className='items'>
          <a
            href='https://www.youtube.com/@DraftComics'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='social-icon' src={YoutubeIcon} alt='YouTube' />
            <span>{Social_Media.Youtube}</span>
          </a>
        </div>
        <div className='items'>
          <a
            href='https://www.instagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='social-icon' src={InstagramIcon} alt='Instagram' />
            <span>{Social_Media.Instagram}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Buttom;
