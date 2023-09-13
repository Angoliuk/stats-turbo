import { memo, type FC } from "react";

import { GameUserStats } from "./game-card-user-stats";
import { SwordsIcon } from "@stats/shared-web/svg";
import { Duration } from "luxon";
import { type RouterOutputs } from "@stats/shared-web/utils";

type GameCardProps = {
  game: RouterOutputs["stats"]["getGamesStats"][number];
};

export const GameCard: FC<GameCardProps> = memo(({ game }) => {
  return (
    <div className="my-4 flex w-full flex-col items-center justify-between rounded-xl bg-zinc-700/60 px-6 py-4 md:flex-row">
      <GameUserStats userGameStats={game.usersMatchStats?.[0]} />
      <div className="my-5 flex flex-col md:my-0">
        <div>
          <p className="text-center text-cyan-600">
            {Duration.fromMillis(game.duration * 1000).toFormat("mm 'min' ss 'sec'")}
          </p>
        </div>
        <div className="flex justify-center">
          <SwordsIcon className="h-12 w-12" />
        </div>
        <div>
          <p className="text-center text-cyan-600">
            Winner:{" "}
            {game.usersMatchStats?.[0]?.isWinner
              ? game.usersMatchStats?.[0].user.name
              : game.usersMatchStats?.[1]?.user.name}
          </p>
        </div>
      </div>
      <GameUserStats userGameStats={game.usersMatchStats?.[1]} />
    </div>
  );
});
