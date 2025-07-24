import { TOKEN } from "../models";

export type IsAuth = () => boolean;

export const isAuth: IsAuth = () => Boolean(window.localStorage.getItem(TOKEN));
