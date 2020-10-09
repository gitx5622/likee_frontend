let API_ROUTE;

if (process.env.NODE_ENV === "production") {
  API_ROUTE = "http://165.232.34.66:9000";
} else {
  API_ROUTE = "http://127.0.0.1:9000";
}

export default API_ROUTE;
