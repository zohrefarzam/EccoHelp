import { useMediaQuery } from "react-responsive";

const useTabletAndBelowMediaQuery = () =>
  useMediaQuery({ query: "(max-width: 1209px)" });

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1200 });
  return isDesktop ? children : null;
};
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
export const TabletAndBelow = ({ children }) => {
  const isTabletAndBelow = useTabletAndBelowMediaQuery();

  return isTabletAndBelow ? children : null;
};

// export const isDesktop = useMediaQuery({ minWidth: 992 });
// export const isMobile = useMediaQuery({ maxWidth: 767 });
