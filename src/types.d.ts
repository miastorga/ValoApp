import { Data, ErrorResponse } from "../models/account";

export type ErrorResponse = {
  errors: Error[]
}

type Error = {
  message: string;
  code: number;
  details: string;
}

export type ValorantSwaggerResponse = {
  status: number;
  data?: Data,
  errors?: ErrorResponse
}