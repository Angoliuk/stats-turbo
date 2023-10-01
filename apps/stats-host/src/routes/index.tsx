import React from "react";
import { Router, Route, RootRoute, Outlet } from "@tanstack/react-router";
import { TRPCWrapper } from "@stats/shared-web/components";
import { UserStats, UsersStats } from "../modules";
import { API_HOST } from "../env";

const rootRoute = new RootRoute({
  component: () => (
    <TRPCWrapper apiHost={API_HOST}>
      <p>works</p>
      <Outlet />
    </TRPCWrapper>
  ),
});

const gamesStatsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/games-stats",
  component: () => (
    <>
      <p>works</p>
    </>
  ),
});

const usersStatsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/users-stats",
  component: UsersStats,
});

const userStatsRoute = new Route({
  getParentRoute: () => usersStatsRoute,
  path: "$userId",
  component: UserStats,
});

const routeTree = rootRoute.addChildren([gamesStatsRoute, usersStatsRoute.addChildren([userStatsRoute])]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
