const dev = {
    isMock: true,
    isDebug: true,
    host: '',
};

const pro = {
    isMock: false,
    isDebug: false,
    host:'',
}
const config = process.env.NODE_ENV === 'production' ? pro : dev;
export default config;