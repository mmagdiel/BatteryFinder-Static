import type { Query, QueryAuth } from "../models";
import axios from "axios";

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

export { query, queryAuth };
