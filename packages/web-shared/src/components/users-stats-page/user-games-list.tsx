import { memo, type FC } from "react";
import { GameCard } from "../game-card";
import { List } from "../list";
import { trpc } from "@stats/shared-web/utils";

type UserGamesListProps = {
  userId: string;
};

export const UserGamesList: FC<UserGamesListProps> = memo(({ userId }) => {
  const {
    data: gamesList,
    error,
    isLoading: isFirstLoading,
    isFetching: isFetchingMore,
    isError,
    isRefetching,
  } = trpc.stats.getUserGamesStats.useQuery({
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
});
