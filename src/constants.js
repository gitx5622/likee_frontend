
let API_ROUTE;

process.env.NODE_ENV === 'development'
    ? API_ROUTE = 'http://127.0.0.1:9000'
    : API_ROUTE = 'http://167.71.137.103:9000';

export default API_ROUTE
