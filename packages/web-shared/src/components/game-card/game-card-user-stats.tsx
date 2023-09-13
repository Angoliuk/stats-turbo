import { UserIcon, CupIcon, MedalIcon } from "@stats/shared-web/svg";
import { type RouterOutputs } from "@stats/shared-web/utils";
import { Link } from "@tanstack/react-router";
import { memo, type FC } from "react";

type GameUserStatsProps = {
  userGameStats: NonNullable<RouterOutputs["stats"]["getGamesStats"][number]["usersMatchStats"]>[0];
};

const DeletedGameUserStats: FC = () => {
  return (
    <div>
      <div>Deleted User</div>
    </div>
  );
};

export const GameUserStats: FC<GameUserStatsProps> = memo(({ userGameStats }) => {
  return userGameStats ? (
    <Link className="w-full md:w-5/12 xl:w-2/6" to={`/users-stats/${userGameStats.userId}`}>
      <div className="flex flex-row rounded-lg bg-zinc-700/60 p-5 md:flex-col lg:flex-row lg:items-center">
        {/* <Image
          alt=""
          src={"https://picsum.photos/200/300"}
          width={80}
          height={80}
          className="h-20 w-20 self-center rounded-full"
        /> */}
        <div className="pl-5 md:pl-0 lg:pl-5">
          <div className="mt-3 flex">
            <UserIcon className="h-4 w-4" />
            <p className="truncate pl-5 text-xl text-slate-200">{userGameStats.user.name}</p>
          </div>
          <div className="flex justify-between md:mt-2 md:flex-row lg:mt-0 lg:flex-col">
            <div className="flex">
              <CupIcon className="h-4 w-4" />
              <p className="truncate pl-5 text-slate-200">{userGameStats.user.score}</p>
            </div>
            <div className="flex">
              <MedalIcon className="h-4 w-4" />
              <p className={`truncate pl-5 ${userGameStats.scoreGained > 0 ? "text-green-500" : "text-rose-500"}`}>
                {userGameStats.scoreGained}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <DeletedGameUserStats />
  );
});
