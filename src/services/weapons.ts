import useSWR from "swr";
import type { Response } from '../models/weapons.d'

type ApiResponse = {
  weaponsData: Response | undefined
  isLoading: boolean
}

const WEAPONS = 'https://valorant-api.com/v1/weapons'
const fetcher = (url: string) => fetch(url).then(res => res.json());

export function getWeapons(): ApiResponse {
  const { data: weaponsData, isLoading } = useSWR<Response>(WEAPONS, fetcher);
  return { weaponsData, isLoading }
}