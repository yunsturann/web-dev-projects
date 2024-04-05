// to test middlewares in swr
export function logger(useSWRNext: any) {
  return (key: any, fetcher: any, config: any) => {
    const extendedFetcher = async (...args: any[]) => {
      console.log("SWR Request", key);
      // we can append here authentication headers, token, etc
      // or even modify the request body
      return fetcher(...args);
    };

    return useSWRNext(key, extendedFetcher, config);
  };
}
