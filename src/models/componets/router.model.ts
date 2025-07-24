import type { ReactNode } from "react";

const Privs = ["/dashboard", "/vehicles", "/products", "/images"] as const;
const Paths = ["/", "/login", "/register", ...Privs, "*"] as const;
export type Path = (typeof Paths)[number];

interface Router {
  path: Path;
  element: ReactNode;
}

type RouterProps = Router[];

export { Paths, Privs };
export type { RouterProps };
