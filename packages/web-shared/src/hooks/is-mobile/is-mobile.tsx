import { useCallback, useEffect, useState } from "react";

const MAX_MOBILE_MEDIA_QUERY = 1024;
const initMatchMedia = () => window.matchMedia(`(max-width: ${MAX_MOBILE_MEDIA_QUERY}px)`);

export const useIsMobile = () => {
  const [matchMedia] = useState(initMatchMedia);
  const [isMobile, setIsMobile] = useState(matchMedia.matches);

  const checkWidth = useCallback(({ matches }: MediaQueryListEvent) => setIsMobile(matches), []);

  useEffect(() => {
    matchMedia.addEventListener("change", checkWidth);
    return () => matchMedia.removeEventListener("change", checkWidth);
  }, [checkWidth, matchMedia]);

  return { isMobile };
};
