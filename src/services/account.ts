import useSWR from "swr";

import type { ValorantSwaggerResponse } from '../types.d'
import { MatchesResponse } from "../models/matches";
type ApiResponse<T> = {
  data: T | undefined;
  isLoading: boolean;
  // matches: MatchesResponse | undefined
}
export const MATCH = 'https://api.henrikdev.xyz/valorant/v3/by-puuid/matches/' //<---affinity(na/br/etc)/puuid(account)

export function getAccount(url: string | null): ApiResponse<ValorantSwaggerResponse> {
  const fetcher = (url: string) => fetch(url).then(res => res.json());
  const { data: account, isLoading } = useSWR<ValorantSwaggerResponse>(url, fetcher);
  // console.log(account)
  // console.log(account?.data)
  // console.log(account?.errors)

  // const affinity = account?.data.region;
  // const puuid = account?.data.puuid;
  // const nextUrl = url ? `${MATCH}${affinity}/${puuid}?size=1` : null;

  // const { data: matches } = useSWR<MatchesResponse>(nextUrl, fetcher);
  // console.log(matches)
  return {
    data: account,
    isLoading,
    // matches
  };
}