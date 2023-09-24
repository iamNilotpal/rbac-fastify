import { HttpError } from "http-errors";

export type AppEnvironment = "development" | "production";
export type Errors<TError> = { [K in keyof TError]: string };
export type CustomOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type ResponseError<TError extends {}> =
  | null
  | HttpError
  | (Errors<TError> & { statusCode: number });
