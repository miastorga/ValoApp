import useSWR from "swr";
import { MatchData } from "../models/matches";

type ApiResponse<T> = {
  data: T | undefined;
  isLoading: boolean;
}
export const MATCH = 'https://api.henrikdev.xyz/valorant/v2/match/' //<---matchId

export function getAccount<T>(url: string | null): ApiResponse<T> {
  const fetcher = (url: string) => fetch(url).then(res => res.json());
  const { data, isLoading } = useSWR<T>(url, fetcher);

  return {
    data,
    isLoading
  };
}