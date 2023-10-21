import { RouterProvider } from "@tanstack/react-router";

import { router } from "./routes";
import { type FC } from "react";
import { TRPCWrapper } from "@stats/shared-web/components";
import { API_HOST } from "./env";

export const App: FC = () => (
  <TRPCWrapper apiHost={API_HOST}>
    {" "}
    <RouterProvider router={router} />
  </TRPCWrapper>
);
