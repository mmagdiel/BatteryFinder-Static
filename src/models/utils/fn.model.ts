import type { FC, FormEvent, KeyboardEvent } from "react";

export type HandleKeyboardVoid = (
  e: KeyboardEvent<HTMLInputElement | HTMLSelectElement>,
) => void;
export type HandleVoid = () => void;
export type HandleTextVoid = (str: string) => void;
export type HandleIDVoid = (id: number) => void;
export type HandleIDValueVoid = (id: number, value: string) => HandleTextVoid;
export type HandleEventVoid = (e: FormEvent<HTMLSelectElement>) => void;

interface LogoSidebarInput {
  handleVoid: HandleVoid;
  isExpanded: boolean;
}

export type LogoSidebarProps = FC<LogoSidebarInput>;

interface LabelSidebarInput {
  label: string;
}

export type LabelSidebarProps = FC<LabelSidebarInput>;
