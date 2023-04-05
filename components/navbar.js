import { useState, useCallback, useEffect, useRef } from "react";
import NavbarSmall from "./navbarSmall";
import NavbarLarge from "./navbarLarge";

const Navbar = () => {
  //För att läsa av skärmstorlek och sätta isBreakpoint till true/false. (isBreakpoint -> rad. 32)
  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addEventListener("change", updateTarget);

      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeEventListener("change", updateTarget);
    }, []);

    return targetReached;
  };

  const isBreakpoint = useMediaQuery(850);

  return <>{isBreakpoint ? <NavbarSmall /> : <NavbarLarge />}</>;
};

export default Navbar;
