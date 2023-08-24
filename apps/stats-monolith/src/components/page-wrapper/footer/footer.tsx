import { tw } from "@stats/tailwind/merge";
import { type ReactNode, memo } from "react";

export type FooterProps = {
  isFooterShown?: boolean;
  footer?: ReactNode;
  footerClassName?: string;
};

export const Footer = memo(({ isFooterShown, footer, footerClassName }: FooterProps) => {
  return isFooterShown ? (
    <div className={tw("bg-white-1000 desktop:hidden z-50 flex w-full p-5", footerClassName)}>{footer}</div>
  ) : null;
});
