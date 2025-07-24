import type { FC, ReactNode } from "react";
import type { HandleVoid } from "../utils";

interface AuthVehiclesInput {
  params: number;
  children: ReactNode;
  handleDisable: HandleVoid;
  handleAble: HandleVoid;
}

export type AuthVehiclesProps = FC<AuthVehiclesInput>;
