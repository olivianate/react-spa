const dev = {
  isMock: true,
  isDebug: true,
  host: '',
};

const pro = {
  isMock: true,
  isDebug: false,
  // host:'',
  host: 'react-spa',
};

const config = process.env.NODE_ENV === 'production' ? pro : dev;
export default config;