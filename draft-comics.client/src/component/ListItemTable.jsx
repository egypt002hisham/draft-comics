import React from 'react';
import './ListItemTable.css';

// بيانات جميع الأقسام
const departmentData = [
  {
    name: 'قسم الكوميكس',
    Title: 'ComicsDepartment',
    subDepartments: [
      {
        name: 'الكوميكس المترجمة',
        description: 'مجموعة كوميكس مترجمة لمختلف اللغات.',
        images: [
          'translated_comic1.webp',
          'translated_comic2.webp',
          'translated_comic3.webp',
        ],
      },
      {
        name: 'الكرتون',
        description: 'قصص كرتونية مليئة بالمرح والمغامرة.',
        images: ['cartoon_comic1.webp', 'cartoon_comic2.webp'],
      },
    ],
  },
  {
    name: 'قسم الكتب',
    Title: 'BookDepartment',
    subDepartments: [
      {
        name: 'كتب المغامرات',
        description: 'كتب تأخذك في مغامرات مثيرة.',
        images: ['adventure_book1.webp', 'adventure_book2.webp'],
      },
      {
        name: 'الكتب المترجمة',
        description: 'كتب مترجمة من لغاتها الأصلية.',
        images: ['translated_book1.webp', 'translated_book2.webp'],
      },
    ],
  },
];

const ListItemTable = ({ filter }) => {
  // تصفية الأقسام حسب الفلتر
  const filteredData = departmentData.filter((department) => {
    if (filter == 'Comics') {
      return department.name === 'قسم الكوميكس'; // عرض قسم الكوميكس فقط
    }
    if (filter == 'Books') {
      return department.name === 'قسم الكتب'; // عرض قسم الكتب فقط
    } else {
      return department;
    }
  });

  return (
    <div className='departments-container'>
      {filteredData.map((department, index) => (
        <div key={index} className='department'>
          <h2 className='department-title'>{department.name}</h2>
          {department.subDepartments.map((sub, subIndex) => (
            <div key={subIndex} className='sub-department'>
              <div className='sub-department-header'>
                <h3 className='sub-title'>{sub.name}</h3>
                <p className='sub-description'>{sub.description}</p>
              </div>
              <div className='image-gallery'>
                {sub.images.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={`/static/comics_img/${img}`}
                    alt={`${sub.name} image ${imgIndex + 1}`}
                    className='gallery-image'
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ListItemTable;
