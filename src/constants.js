
let API_ROUTE;

process.env.NODE_ENV === 'development'
    ? API_ROUTE = 'http://127.0.0.1:9000'
    : API_ROUTE = 'https://likee.co.ke';

export default API_ROUTE
