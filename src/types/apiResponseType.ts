export interface ApiErrorResponseType {
  message: string;
}

export interface ApiResponseType<T> {
  success: boolean;
  data: T;
  error: ApiErrorResponseType | null;
}