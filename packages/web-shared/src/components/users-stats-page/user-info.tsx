import { CupIcon } from "@stats/shared-web/svg";
import { trpc } from "@stats/shared-web/utils";
import { memo, type FC } from "react";

type UserInfoProps = {
  userId: string;
};

export const UserInfo: FC<UserInfoProps> = memo(({ userId }) => {
  const { data: user } = trpc.stats.getUserById.useQuery(
    {
      userId,
    },
    {
      initialData: {
        name: "loading...",
        score: 0,
      },
    },
  );

  if (!user) {
    // TODO: modal + redirect
    return <></>;
  }

  return (
    <div className="mb-5 flex items-center">
      {/* <image src="" />
      <Image
        alt=""
        src={"https://picsum.photos/200/300"}
        width={144}
        height={144}
        className="mr-5 h-36 w-36 rounded-full"
      /> */}
      <div>
        <p className="text-2xl text-slate-200">{user.name}</p>
        <div className="flex">
          <CupIcon className="h-4 w-4" />
          <p className="ml-2 text-lg text-slate-200">{user.score}</p>
        </div>
      </div>
    </div>
  );
});
