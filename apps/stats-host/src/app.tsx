import { RouterProvider } from "@tanstack/react-router";

import { router } from "./routes";
import { type FC } from "react";

export const App: FC = () => <RouterProvider router={router} />;
