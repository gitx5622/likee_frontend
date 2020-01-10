
let API_ROUTE;

process.env.NODE_ENV === 'development'
    ? API_ROUTE = 'http://127.0.0.1:9000'
    : API_ROUTE = 'http://178.62.77.252:9000';

export default API_ROUTE
