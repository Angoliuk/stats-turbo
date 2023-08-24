import { GameCard, List, PageWrapper } from "@stats/components";
import { api } from "@stats/utils/api";
import { type NextPage } from "next";

const GamesStats: NextPage = () => {
  const {
    data: games,
    error,
    isLoading: isFirstLoading,
    isFetching: isFetchingMore,
    isError,
    isRefetching,
  } = api.stats.getGamesStats.useQuery({});
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
};

export default GamesStats;
