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

  const isBreakpoint = useMediaQuery(768);

  return <>{isBreakpoint ? <NavbarSmall /> : <NavbarLarge />}</>;
};

export default Navbar;

// import styles from "./navbar.module.scss";
// import { useState, useCallback, useEffect, useRef } from "react";
// import { useRouter } from "next/router";

// const Navbar = () => {
//   //För att läsa av skärmstorlek och sätta isBreakpoint till true/false. (isBreakpoint -> rad. 32)
//   const useMediaQuery = (width) => {
//     const [targetReached, setTargetReached] = useState(false);

//     const updateTarget = useCallback((e) => {
//       if (e.matches) {
//         setTargetReached(true);
//       } else {
//         setTargetReached(false);
//       }
//     }, []);

//     useEffect(() => {
//       const media = window.matchMedia(`(max-width: ${width}px)`);
//       media.addEventListener("change", updateTarget);

//       if (media.matches) {
//         setTargetReached(true);
//       }

//       return () => media.removeEventListener("change", updateTarget);
//     }, []);

//     return targetReached;
//   };

//   const isBreakpoint = useMediaQuery(768);
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const dropdown = useRef(null);

//   //För att toggla dropdownmenu när vi klickar på hamburger Menu.
//   const handleonClick = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   //För att stänga dropdownmenu när den är öppen & vi klickar utanför den.
//   useEffect(() => {
//     if (!dropdownVisible) return;

//     function handleClick(event) {
//       if (dropdown.current && !dropdown.current.contains(event.target)) {
//         setDropdownVisible(false);
//       }
//     }
//     const timeoutId = setTimeout(() => {
//       window.addEventListener("click", handleClick);
//     }, 0);

//     return () => {
//       clearTimeout(timeoutId);
//       window.removeEventListener("click", handleClick);
//     };
//   }, [dropdownVisible]);

//   //För att få aktiva Länkar.
//   let aboutActive = false;
//   let homeActive = false;
//   const router = useRouter();
//   if (router.pathname == "/about") {
//     aboutActive = true;
//   } else if (router.pathname == "/") {
//     homeActive = true;
//   }

//   return (
//     <>
//       {isBreakpoint ? (
//         <>
//           <header className={styles.navbar}>
//             <img
//               className={styles.hamburgerMenu}
//               src="/HamburgerMenu.svg"
//               alt="hamburger menu"
//               width="69px"
//               height="69px"
//               onClick={handleonClick}
//             />
//           </header>
//           <div
//             className={styles.dropdown}
//             style={{ display: dropdownVisible ? "block" : "none" }}
//             ref={dropdown}
//           >
//             <a
//               className={homeActive ? styles.linkActive : styles.link}
//               href="./"
//             >
//               <h2>Home</h2>
//             </a>
//             <h2>Group</h2>
//             <h2>Shopping List</h2>
//             <a
//               className={aboutActive ? styles.linkActive : styles.link}
//               href="./about"
//             >
//               <h2>About Us</h2>
//             </a>
//           </div>
//         </>
//       ) : (
//         <header className={styles.navbar}>
//           <a className={homeActive ? styles.linkActive : styles.link} href="./">
//             <h2>Home</h2>
//           </a>
//           <h2>Group</h2>
//           <h2>Shopping List</h2>
//           <a
//             className={aboutActive ? styles.linkActive : styles.link}
//             href="./about"
//           >
//             <h2>About Us</h2>
//           </a>
//         </header>
//       )}
//     </>
//   );
// };

// export default Navbar;
