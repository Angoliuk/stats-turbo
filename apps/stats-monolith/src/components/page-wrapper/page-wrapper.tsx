import { tw } from "@stats/tailwind/merge";
import { type ReactNode, type FC } from "react";
import { type FooterProps, Footer } from "./footer";
import { type HeaderProps, Header } from "./header";

export type PageWrapperProps = {
  children: ReactNode;
  contentWrapperClassName?: string;
  isShown?: boolean;
  className?: string;
} & HeaderProps &
  FooterProps;

export const PageWrapper: FC<PageWrapperProps> = ({
  children,
  isShown = true,
  className,
  isFooterShown,
  footer,
  footerClassName,
  isHeaderShown = true,
  contentWrapperClassName,
  header,
  isHeaderLeftShown = true,
  isHeaderRightShown = true,
  isHeaderCenterShown = true,
  headerLeft,
  headerRight,
  headerCenter,
  headerCenterClassName,
}) => {
  return isShown ? (
    <div className={tw("flex h-full min-h-full w-full flex-1 flex-col bg-zinc-900/80", className)}>
      <Header
        isHeaderShown={isHeaderShown}
        header={header}
        isHeaderLeftShown={isHeaderLeftShown}
        isHeaderRightShown={isHeaderRightShown}
        isHeaderCenterShown={isHeaderCenterShown}
        headerLeft={headerLeft}
        headerRight={headerRight}
        headerCenter={headerCenter}
        headerCenterClassName={headerCenterClassName}
      />
      <div className={tw("flex h-full min-h-0 w-full flex-1 flex-col overflow-y-auto", contentWrapperClassName)}>
        {children}
      </div>
      <Footer isFooterShown={isFooterShown} footer={footer} footerClassName={footerClassName} />
    </div>
  ) : (
    <>{children}</>
  );
};
