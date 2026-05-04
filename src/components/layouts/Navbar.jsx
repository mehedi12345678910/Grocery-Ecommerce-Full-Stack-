// import React from "react";
// import Logo from "./Logo";
// import Link from "next/link";
// import NavLink from "../buttons/NavLink";
// import { FiShoppingCart } from "react-icons/fi";
// import AuthButtons from "../buttons/AuthButtons";

// const Navbar = () => {
//   const nav = (
//     <>
//       <li>
//         <Link href={"/"}>Home</Link>
//       </li>
//       <li>
//         <NavLink href={"/products"}>Products</NavLink>
//       </li>
//       <li>
//         <NavLink href={"/blog"}>blog</NavLink>
//       </li>
//       <li>
//         <NavLink href={"/contact"}>Contact</NavLink>
//       </li>
//     </>
//   );
//   return (
//     <div>
//       <div className="navbar bg-base-100 ">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {" "}
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />{" "}
//               </svg>
//             </div>
//             <ul
//               tabIndex="-1"
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//             >
//               {nav}
//             </ul>
//           </div>
//           <Logo></Logo>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{nav}</ul>
//         </div>
//         <div className="navbar-end space-x-4">
//           <Link href={"/cart"} className="btn btn-primary">
//             <FiShoppingCart></FiShoppingCart>
//           </Link>
//           <AuthButtons></AuthButtons>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


///

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import NavLink from "../buttons/NavLink";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import AuthButtons from "../buttons/AuthButtons";

const Navbar = () => {
  const nav = (
    <>
      <li>
        <NavLink href={"/"} className="px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 font-medium">Home</NavLink>
      </li>
      <li>
        <NavLink href={"/products"} className="px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 font-medium">Products</NavLink>
      </li>
      <li>
        <NavLink href={"/blog"} className="px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 font-medium">Blog</NavLink>
      </li>
      <li>
        <NavLink href={"/contact"} className="px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 font-medium">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-[100] w-full border-b border-base-content/5 bg-base-100/70 backdrop-blur-xl transition-all duration-300">
      <div className="container mx-auto max-w-7xl">
        <div className="navbar min-h-[4.5rem] px-4">
          
          {/* Left Side: Mobile Menu & Logo */}
          <div className="navbar-start gap-1">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-2 mr-1 hover:bg-primary/10 group">
                <FiMenu size={24} className="group-hover:text-primary transition-colors" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-4 z-[1] p-4 shadow-2xl bg-base-100 rounded-2xl w-72 border border-base-content/10 gap-2 animate-in fade-in slide-in-from-top-4 duration-300"
              >
                <div className="mb-2 px-4 py-2 border-b border-base-content/5">
                    <Logo />
                </div>
                {nav}
              </ul>
            </div>
            <div className="flex items-center transform transition-all duration-300 hover:scale-[1.02] active:scale-95">
              <Logo />
            </div>
          </div>

          {/* Center Side: Desktop Menu */}
          <div className="navbar-center hidden lg:flex bg-base-200/50 rounded-full px-2 py-1 border border-base-content/5">
            <ul className="menu menu-horizontal px-1 gap-1">
              {nav}
            </ul>
          </div>

          {/* Right Side: Actions */}
          <div className="navbar-end gap-2 md:gap-4">
            {/* Cart Icon */}
            <Link 
              href={"/cart"} 
              className="group relative p-2.5 rounded-full hover:bg-primary/10 transition-all duration-300"
            >
              <div className="indicator">
                <FiShoppingCart size={22} className="group-hover:text-primary transition-colors duration-300" />
                <span className="badge badge-sm badge-success indicator-item border-2 border-base-100 font-bold scale-50">
                  
                </span>
              </div>
            </Link>

            {/* Vertical Divider */}
            <div className="hidden sm:block h-6 w-[1.5px] bg-base-content/10"></div>

            {/* Auth Buttons */}
            <div className="flex items-center">
                <AuthButtons />
            </div>
          </div>

        </div>
      </div>
  <marquee behavior="30" direction="60">প্রিমিয়াম মরিচ গুঁড়া 🌶️ ,খাঁটি হলুদের গুঁড়া, বাছাইকৃত আস্ত মশলা , স্পেশাল গরম মশলা সুগন্ধি ধনিয়া গুঁড়া ঝাল শাহি জিরা গুঁড়া সেরা মানের কালোজিরা</marquee>
  
    </div>
  );
};

export default Navbar;