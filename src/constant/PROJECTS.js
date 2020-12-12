const URL = process.env.PUBLIC_URL;

const app = [
  {
    title: 'College Advisor',
    thumbnail: `${URL + '/screenshot/app-advisor.png'}`,
    subtitle: 'Mobile App on iPhone Link: https://youtu.be/i0fwzywEVvc',
  },
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
    title: 'Master Ad Dashboard',
    thumbnail: `${URL + '/screenshot/web-dashboard3.png'}`,
    subtitle: 'Dashboard for overview of advertising production data',
  },
  {
    title: 'Buy Ticket',
    thumbnail: `${URL + '/screenshot/web-buyticket3.png'}`,
    subtitle: 'C# Microsoft Visual Studio 2010',
  },
  // {
  //   title: 'Ying Ying Ying GAME',
  //   thumbnail: `${URL + '/screenshot/web-yyygame.png'}`,
  //   subtitle: 'GameSalad Creator',
  // },
  {
    title: 'Search Video',
    thumbnail: `${URL + '/screenshot/web-findyoutube.png'}`,
    subtitle: 'React JS',
  },
]


export default { app, website };