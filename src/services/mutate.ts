import axios from "axios";
import { urlProductsBy, urlVehiclesBy, urlImagesBy } from "../utils";

const mutate = <T extends object>(url: string, body: T) =>
  axios
    .post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      validateStatus: (status) => status >= 200 && status < 400,
    })
    .then((res) => {
      const { status, data } = res;
      return { status, data };
    });

const deleteResource = (url: string) =>
  axios
    .delete(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      validateStatus: (status) => status >= 200 && status < 400,
    })
    .then((res) => {
      const { status, data } = res;
      return { status, data };
    });

const updateResource = <T extends object>(url: string, body: T) =>
  axios
    .put(url, body, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      validateStatus: (status) => status >= 200 && status < 400,
    })
    .then((res) => {
      const { status, data } = res;
      return { status, data };
    });

const deleteProduct = (id: number) =>
  deleteResource(`${urlProductsBy()}/${id}`);

const updateProduct = <T extends object>(id: number, body: T) =>
  updateResource(`${urlProductsBy()}/${id}`, body);

const createProduct = <T extends object>(body: T) =>
  mutate(`${urlProductsBy()}`, body);

const deleteVehicle = (id: number) =>
  deleteResource(`${urlVehiclesBy()}/${id}`);

const updateVehicle = <T extends object>(id: number, body: T) =>
  updateResource(`${urlVehiclesBy()}/${id}`, body);

const createVehicle = <T extends object>(body: T) =>
  mutate(`${urlVehiclesBy()}`, body);

const updateImage = <T extends object>(id: number, body: T) =>
  updateResource(`${urlImagesBy()}/${id}`, body);

export { mutate, deleteResource, updateResource, deleteProduct };
export { createVehicle, updateImage, updateProduct };
export { createProduct, deleteVehicle, updateVehicle };
