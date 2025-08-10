export const TOKEN = "MFS0880";

export const configToken = {
  defaultValue: "",
  serializer: (v: string) => v ?? "",
  deserializer: (v: any) => v,
};
