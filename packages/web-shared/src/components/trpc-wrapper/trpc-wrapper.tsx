import { type FC, type ReactNode } from "react";
import { useTRPCClient } from "@stats/shared-web/hooks";
import { trpc } from "@stats/shared-web/utils/trpc";
import { QueryClientProvider } from "@tanstack/react-query";

export type TRPCWrapperProps = {
  children: ReactNode;
};

export const TRPCWrapper: FC<TRPCWrapperProps> = ({ children }) => {
  const { queryClient, trpcClient } = useTRPCClient();
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
