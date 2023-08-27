export type Data = {
  puuid: string;
  region: string;
  account_level: number;
  name: string;
  tag: string;
  card: Card;
  last_update: string;
  last_update_raw: number;
}

export type Card = {
  small: string;
  large: string;
  wide: string;
  id: string;
}

export type ErrorResponse = {
  errors: Error[]
}

type Error = {
  message: string;
  code: number;
  details: string;
}
