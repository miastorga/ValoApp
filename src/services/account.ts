import useSWR from "swr";

import type { ValorantSwaggerResponse } from '../types.d'
import { MatchesResponse } from "../models/matches";
type ApiResponse = {
  data: ValorantSwaggerResponse | undefined //data, error y status
  isLoading: boolean
  matches?: MatchesResponse
  loadingMatches?: boolean
}
export const MATCH = 'https://api.henrikdev.xyz/valorant/v3/by-puuid/matches/' //<---affinity(na/br/etc)/puuid(account)

export function getAccount(url: string | null): ApiResponse {
  const fetcher = (url: string) => fetch(url).then(res => res.json());
  const { data: account, isLoading } = useSWR<ValorantSwaggerResponse>(url, fetcher);
  console.log('account', account)
  console.log('account data', account?.data)
  console.log('account error', account?.errors)

  let affinity;
  let puuid;
  let nextUrl
  if (account?.data) {
    affinity = account?.data.region;
    puuid = account?.data.puuid;
    nextUrl = url ? `${MATCH}${affinity}/${puuid}?size=1` : null;
  }

  const { data: matches, isLoading: loadingMatches } = useSWR<MatchesResponse>(nextUrl, fetcher);
  console.log(loadingMatches)
  return {
    data: account,
    isLoading,
    matches,
    loadingMatches,
  };
}
