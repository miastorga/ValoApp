import { Data, ErrorResponse } from "../models/account";
import account from '../mocks/Swagger/account.json'

export type AccountResponse = {
  status: number;
  data?: Data,
  errors?: ErrorResponse
}

// Usar desde custom hook
export async function getAccount(name: string | undefined, tag: string | undefined): Promise<AccountResponse> {
  const fetchData = await fetch(`https://api.henrikdev.xyz/valorant/v1/account/${name}/${tag}`)
  const response: AccountResponse = await fetchData.json()
  return response
}
