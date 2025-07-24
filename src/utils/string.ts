import type { ToPascalCase } from "../models";

const toPascalCase: ToPascalCase = (str) => {
  let tempArray = str.split(" ");
  tempArray = tempArray.map(
    (value) =>
      value.charAt(0).toUpperCase() +
      value.slice(1, value.length).toLowerCase(),
  );
  return tempArray.join("");
};

const addBearer = (token: string) => `Bearer ${token}`;

export { toPascalCase, addBearer };
