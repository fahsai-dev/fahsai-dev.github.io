const URL = process.env.PUBLIC_URL;

const app = [
  // {
  //   title: 'app',
  //   subTitle: 'dddd'
  // },
  // {
  //   title: 'app',
  //   subTitle: 'dddd'
  // },
  // {
  //   title: 'app',
  //   subTitle: 'dddd'
  // },
]

const website = [
  {
    title: 'Makro Click',
    thumbnail: `${URL + '/screenshot/web-makro.png'}`,
    subtitle: 'Order Online Website',
  },
  {
    title: 'GPS Besttech',
    thumbnail: `${URL + '/screenshot/web-besttech.png'}`,
    subtitle: 'Company Profile Website',
  },
  {
    title: 'Youtube Search',
    thumbnail: `${URL + '/screenshot/web-findyoutube.png'}`,
    subtitle: 'Built with react',
  },
]


export default { app, website };