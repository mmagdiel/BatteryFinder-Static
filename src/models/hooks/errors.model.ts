interface Err {
  code: number;
  message: string;
}

export type Error = Err | undefined;
