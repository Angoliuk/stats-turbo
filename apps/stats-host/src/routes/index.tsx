import React from "react";
import { Router, Route, RootRoute, Outlet } from "@tanstack/react-router";
import { PageWrapper } from "@stats/shared-web/components";
import { UserStats, UsersStats } from "../modules";

import { GamesStats } from "@stats/remote/modules";
import { trpc } from "@stats/shared-web/utils";

const rootRoute = new RootRoute({
  component: () => <Outlet />,
});

const indexRoute = new Route({
  path: "/",
  getParentRoute: () => rootRoute,
  component: () => {
    return (
      <PageWrapper>
        <p>Welcome</p>
      </PageWrapper>
    );
  },
});

const gamesStatsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/games-stats",
  component: () => {
    const {
      data: games,
      error,
      isLoading: isFirstLoading,
      isFetching: isFetchingMore,
      isError,
      isRefetching,
    } = trpc.stats.getGamesStats.useQuery({});
    return (
      <PageWrapper>
        <GamesStats
          games={games}
          error={error?.message}
          isFirstLoading={isFirstLoading}
          isFetchingMore={isFetchingMore}
          isError={isError}
          isRefetching={isRefetching}
        />
      </PageWrapper>
    );
  },
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

const routeTree = rootRoute.addChildren([indexRoute, gamesStatsRoute, usersStatsRoute.addChildren([userStatsRoute])]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
