
let API_ROUTE;

if (process.env.NODE_ENV === 'production') {
    API_ROUTE = 'https://admin.likee.co.ke'
}else {
    API_ROUTE = 'http://127.0.0.1:9000';
}

export default API_ROUTE;
