import axios from "axios";
import { urlImagesBy, urlProducts, urlVehicles } from "../utils";

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

const mutateResource = <T extends object, H extends object>(
  url: string,
  body: T,
  header: H
) =>
  axios
    .post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...header,
      },
      validateStatus: (status) => status >= 200 && status < 400,
    })
    .then((res) => {
      const { status, data } = res;
      return { status, data };
    });

const deleteResource = <H extends object>(url: string, header: H) =>
  axios
    .delete(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...header,
      },
      validateStatus: (status) => status >= 200 && status < 400,
    })
    .then((res) => {
      const { status, data } = res;
      return { status, data };
    });

const updateResource = <T extends object, H extends object>(
  url: string,
  body: T,
  header: H
) =>
  axios
    .put(url, body, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...header,
      },
      validateStatus: (status) => status >= 200 && status < 400,
    })
    .then((res) => {
      const { status, data } = res;
      return { status, data };
    });

const deleteProduct = <H extends object>(id: number, header: H) =>
  deleteResource(`${urlProducts(id)}`, header);

const updateProduct = <T extends object, H extends object>(
  id: number,
  body: T,
  header: H
) => updateResource(`${urlProducts(id)}`, body, header);

const createProduct = <T extends object, H extends object>(
  body: T,
  header: H
) => mutateResource(`${urlProducts()}`, body, header);

const deleteVehicle = <H extends object>(id: number, header: H) =>
  deleteResource(`${urlVehicles(id)}`, header);

const updateVehicle = <T extends object, H extends object>(
  id: number,
  body: T,
  header: H
) => updateResource(`${urlVehicles(id)}`, body, header);

const createVehicle = <T extends object, H extends object>(
  body: T,
  header: H
) => mutateResource(`${urlVehicles()}`, body, header);

const updateImage = <T extends object, H extends object>(
  id: number,
  body: T,
  header: H
) => updateResource(`${urlImagesBy()}/${id}`, body, header);

export { mutate, deleteResource, updateResource, deleteProduct };
export { createVehicle, updateImage, updateProduct };
export { createProduct, deleteVehicle, updateVehicle };
