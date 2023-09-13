import { Link } from "@tanstack/react-router";
import { type FC, memo } from "react";

export const HeaderRightDefault: FC = memo(() => {
  return (
    <div className="flex items-center justify-between">
      <Link to={"/users-stats"}>
        <p className="p-6 text-center text-slate-200 duration-75 hover:-translate-y-1">Users</p>
      </Link>
      <Link to={"/games-stats"}>
        <p className="p-6 text-center text-slate-200 duration-75 hover:-translate-y-1">Games</p>
      </Link>
    </div>
  );
});
