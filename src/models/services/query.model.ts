export type Query = <T>(url: string) => Promise<T>;

export type QueryAuth = (token: string) => <T>(url: string) => Promise<T>;
