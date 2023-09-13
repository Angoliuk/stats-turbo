import { memo, type FC } from "react";

import { GameCard } from "../game-card";
import { Loader } from "../loader";
import { trpc } from "@stats/shared-web/utils";

type GetUserLongestAndShortestGames = {
  userId: string;
};

export const GetUserLongestAndShortestGames: FC<GetUserLongestAndShortestGames> = memo(({ userId }) => {
  const {
    data: longestAndShortestGames,
    isFetching,
    isError,
  } = trpc.stats.getUserLongestAndShortestGames.useQuery({ userId });

  if (isFetching) return <Loader />;
  if (isError || !longestAndShortestGames || longestAndShortestGames.length !== 2) return null;

  return (
    <div className="flex flex-col justify-between">
      <>
        <div className="w-full">
          <p className="text-xl text-slate-200">Shortest game:</p>
          {!!longestAndShortestGames?.[0] && <GameCard game={longestAndShortestGames?.[0]} />}
        </div>
        <div className="w-full">
          <p className="text-xl text-slate-200">Longest game:</p>
          {!!longestAndShortestGames?.[1] && <GameCard game={longestAndShortestGames?.[1]} />}
        </div>
      </>
    </div>
  );
});
