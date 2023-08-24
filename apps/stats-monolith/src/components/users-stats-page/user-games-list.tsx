import { api } from "@stats/utils/api";
import { type FC } from "react";

import { GameCard } from "../game-card";
import { List } from "../list";

type UserGamesListProps = {
  userId: string;
};
export const UserGamesList: FC<UserGamesListProps> = ({ userId }) => {
  const {
    data: gamesList,
    error,
    isLoading: isFirstLoading,
    isFetching: isFetchingMore,
    isError,
    isRefetching,
  } = api.stats.getUserGamesStats.useQuery({
    userId,
  });
  return (
    <>
      <p className="text-xl text-slate-200">All games:</p>
      <List
        data={gamesList}
        keyExtractor={({ item }) => item.id}
        isError={isError}
        isFetchingMore={isFetchingMore}
        isFirstLoading={isFirstLoading}
        isRefetching={isRefetching}
        error={error?.message}
        listItem={({ item }) => <GameCard game={item} />}
      />
    </>
  );
};
