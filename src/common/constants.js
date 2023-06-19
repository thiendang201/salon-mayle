export const NavList = [
  {
    id: '' + Date.now() + Math.floor(Math.random() * 10000),
    text: 'Trang chủ',
    path: '/'
  },
  {
    id: '' + Date.now() + Math.floor(Math.random() * 10000),
    text: 'Các dịch vụ',
    path: '/services'
  },
  {
    id: '' + Date.now() + Math.floor(Math.random() * 10000),
    text: 'Tin tức',
    path: '/news',
    direction: 'bottom',
    children: [
      {
        id: '' + Date.now() + Math.floor(Math.random() * 10000),
        text: 'Tin tức',
        path: '/news',
        direction: 'right',
        children: [
          {
            id: '' + Date.now() + Math.floor(Math.random() * 10000),
            text: 'Tin tức',
            path: '/news'
          },
          {
            id: '' + Date.now() + Math.floor(Math.random() * 10000),
            text: 'Tin tức',
            path: '/news'
          }
        ]
      },
      {
        id: '' + Date.now() + Math.floor(Math.random() * 10000),
        text: 'Tin tức',
        path: '/news',
        direction: 'bottom'
      }
    ]
  },
  {
    id: '' + Date.now() + Math.floor(Math.random() * 10000),
    text: 'Trang chủ',
    path: '/'
  }
];
