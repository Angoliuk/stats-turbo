import { trpc } from "@stats/shared-web/utils";
import { useState } from "react";
import { QueryClient } from "@tanstack/react-query";
import superjson from "superjson";
import { httpBatchLink } from "@trpc/react-query";

export const useTRPCClient = (url: string) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url,
          // You can pass any HTTP headers you wish here
          // async headers() {
          //   return {
          //     authorization: getAuthCookie(),
          //   };
          // },
        }),
      ],
      transformer: superjson,
    }),
  );
  return {
    queryClient,
    trpcClient,
  };
};
