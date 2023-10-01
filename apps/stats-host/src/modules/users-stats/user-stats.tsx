import { memo, type FC } from "react";
import { PageWrapper, UserStatsPage } from "@stats/shared-web/components";
import { useParams } from "@tanstack/react-router";

export const UserStats: FC = memo(() => {
  const { userId } = useParams({ from: "/users-stats/$userId" });

  if (!userId || Array.isArray(userId)) return null;
  return (
    <PageWrapper>
      <UserStatsPage.UserInfo userId={userId} />
      <UserStatsPage.UserGamesGeneralStats userId={userId} />
      <UserStatsPage.GetUserLongestAndShortestGames userId={userId} />
      <UserStatsPage.UserGamesList userId={userId} />
    </PageWrapper>
  );
});
