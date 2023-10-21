import { GameCard, List } from "@stats/shared-web/components";
import { type RouterOutputs } from "@stats/shared-web/utils";
import { type FC, memo } from "react";

export type GamesStatsProps = {
  games: RouterOutputs["stats"]["getGamesStats"] | undefined;
  error?: string;
  isFirstLoading: boolean;
  isFetchingMore: boolean;
  isError: boolean;
  isRefetching: boolean;
};

export const GamesStats: FC<GamesStatsProps> = memo(
  ({ games, error, isFirstLoading, isFetchingMore, isError, isRefetching }) => {
    console.log(games, error);
    return (
      <List
        keyExtractor={({ item }) => item.id}
        data={games}
        isError={isError}
        isFetchingMore={isFetchingMore}
        isFirstLoading={isFirstLoading}
        isRefetching={isRefetching}
        error={error}
        listItem={({ item }) => <GameCard game={item} />}
      />
    );
  },
);
