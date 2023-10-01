import { type FC, type ReactNode } from "react";
import { useTRPCClient } from "@stats/shared-web/hooks";
import { trpc } from "@stats/shared-web/utils";
import { QueryClientProvider } from "@tanstack/react-query";

export type TRPCWrapperProps = {
  children: ReactNode;
  apiHost: string;
};

export const TRPCWrapper: FC<TRPCWrapperProps> = ({ children, apiHost }) => {
  const { queryClient, trpcClient } = useTRPCClient(apiHost);
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
