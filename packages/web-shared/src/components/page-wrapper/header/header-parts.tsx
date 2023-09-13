import { type ReactElement, type ReactNode, memo } from "react";

import { HeaderCenterDefault, HeaderLeftDefault, HeaderRightDefault } from "../default-parts";
import { tw } from "@stats/tailwind/merge";

export type HeaderLeftProps = {
  isHeaderLeftShown?: boolean;
  headerLeft?: ReactNode;
};

export const HeaderLeft = memo(({ isHeaderLeftShown, headerLeft }: HeaderLeftProps): ReactElement | null => {
  return isHeaderLeftShown ? (
    <div className={tw("mobile:w-1/3 flex w-1/2 items-center")}>{headerLeft ?? <HeaderLeftDefault />}</div>
  ) : null;
});

export type HeaderCenterProps = {
  isHeaderCenterShown?: boolean;
  headerCenter?: ReactNode;
  headerCenterClassName?: string;
};

export const HeaderCenter = memo(
  ({ isHeaderCenterShown, headerCenter, headerCenterClassName }: HeaderCenterProps): ReactElement | null => {
    return isHeaderCenterShown ? (
      <div className={tw("mobile:w-1/3 mobile:justify-center flex items-center", headerCenterClassName)}>
        {headerCenter ?? <HeaderCenterDefault />}
      </div>
    ) : null;
  },
);

export type HeaderRightProps = {
  isHeaderRightShown?: boolean;
  headerRight?: ReactNode;
};

export const HeaderRight = memo(({ isHeaderRightShown, headerRight }: HeaderRightProps): ReactElement | null => {
  return isHeaderRightShown ? (
    <div className={tw("mobile:w-1/3 flex items-center justify-end")}>{headerRight ?? <HeaderRightDefault />}</div>
  ) : null;
});
