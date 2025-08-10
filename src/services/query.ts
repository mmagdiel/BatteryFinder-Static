import type { Query, QueryAuth } from "../models";
import axios from "axios";
import { TOKEN } from "../models";

// addBearer(token)
const query: Query = (url) =>
  axios
    .get(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      validateStatus: (status) => status >= 200 && status < 400,
    })
    .then((res) => res.data)
    .catch((e) => e.response.data);

const queryAuth: QueryAuth = (token) => (url) => {
  if (!token || token === "Bearer " || token === "Bearer undefined") {
    console.error("Invalid or missing token:", token);
    throw new Error("Authentication token is missing or invalid");
  }

  return axios
    .get(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token,
      },
      validateStatus: (status) => status >= 200 && status < 400,
    })
    .then((res) => res.data)
    .catch((e) => {
      console.error("API Error:", e.response?.status, e.response?.data);
      return e.response?.data || { error: "Network error" };
    });
};

// Create auth-specific Axios instances
const createAuthAxiosInstance = () => {
  const instance = axios.create({
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    validateStatus: (status) => status >= 200 && status < 400,
  });

  // Add request interceptor to include token
  instance.interceptors.request.use(
    (config) => {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        // Remove quotes if they exist around the token
        const cleanToken = token.replace(/^"(.*)"$/, '$1');
        // Check if token already starts with Bearer, if not add it
        config.headers.Authorization = cleanToken.startsWith('Bearer ') 
          ? cleanToken 
          : `Bearer ${cleanToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  return instance;
};

// Create instances for each auth endpoint
const dashboardAxios = createAuthAxiosInstance();
const imagesAxios = createAuthAxiosInstance();
const productsAxios = createAuthAxiosInstance();
const vehiclesAxios = createAuthAxiosInstance();

// Query functions using the auth instances
const queryDashboard: Query = (url) =>
  dashboardAxios
    .get(url)
    .then((res) => res.data)
    .catch((e) => {
      console.error("Dashboard API Error:", e.response?.status, e.response?.data);
      return e.response?.data || { error: "Network error" };
    });

const queryImages: Query = (url) =>
  imagesAxios
    .get(url)
    .then((res) => res.data)
    .catch((e) => {
      console.error("Images API Error:", e.response?.status, e.response?.data);
      return e.response?.data || { error: "Network error" };
    });

const queryProducts: Query = (url) =>
  productsAxios
    .get(url)
    .then((res) => res.data)
    .catch((e) => {
      console.error("Products API Error:", e.response?.status, e.response?.data);
      return e.response?.data || { error: "Network error" };
    });

const queryVehicles: Query = (url) =>
  vehiclesAxios
    .get(url)
    .then((res) => res.data)
    .catch((e) => {
      console.error("Vehicles API Error:", e.response?.status, e.response?.data);
      return e.response?.data || { error: "Network error" };
    });

export {
  query,
  queryAuth,
  queryDashboard,
  queryImages,
  queryProducts,
  queryVehicles,
};
