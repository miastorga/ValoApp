import useSWR from 'swr';

type ApiHookResponse<T> = {
  data: T | undefined;
  isLoading: boolean;
}

export function useAccount<T>(url: string | null): ApiHookResponse<T> {
  const fetcher = (url: string) => fetch(url).then(res => res.json());
  const { data, isLoading } = useSWR<T>(url, fetcher);

  return {
    data,
    isLoading
  };
}

