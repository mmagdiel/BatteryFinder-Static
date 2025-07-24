import { useEffect } from "react";
//import { useCookie } from "react-use";
//import { useNavigate } from "react-router";
//import { COOKIE } from "../models";

type UsePublicPage = () => [string, () => void];

const login = "/login";
/*
export const usePublicPage: UsePublicPage = () => {
  const [token, _, deleteCookie] = useCookie(COOKIE);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token || token === "") {
      navigate(login);
    }
  }, [token]);
  console.log(_);
  return [token ?? "", deleteCookie];
};
*/
