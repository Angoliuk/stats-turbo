import { GameCard, List, PageWrapper } from "@stats/shared-web/components";
import { trpc } from "@stats/shared-web/utils";
import { type FC, memo } from "react";

export const GamesStats: FC = memo(() => {
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
      <List
        keyExtractor={({ item }) => item.id}
        data={games}
        isError={isError}
        isFetchingMore={isFetchingMore}
        isFirstLoading={isFirstLoading}
        isRefetching={isRefetching}
        error={error?.message}
        listItem={({ item }) => <GameCard game={item} />}
      />
    </PageWrapper>
  );
});
