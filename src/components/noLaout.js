// import * as React from "react";
// import { Link } from "gatsby";
// import "../CSS/layout.css";
// const  = ({ pageTitle, children }) => {
//   const [click, setClick] = React.useState(false);
//   const handleClick = () => setClick(!click);
//   return (
//     <div className="Container">
//       <div className="layout-wrapper">
//         <div className="logo">GIREESH REDDY</div>
//         <div>
//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             <li>
//               <Link
//                 to="/"
//                 className="layoutli"
//                 activeClassName="active"
//                 onClick={handleClick}
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/"
//                 className="layoutli"
//                 activeClassName="active"
//                 onClick={handleClick}
//               >
//                 About Me
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/blog"
//                 className="layoutli"
//                 activeClassName="active"
//                 onClick={handleClick}
//               >
//                 Blog
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/"
//                 className="layoutli"
//                 activeClassName="active"
//                 onClick={handleClick}
//               >
//                 My Business
//               </Link>
//             </li>
//             <li className="contact ">
//               <Link
//                 to="/"
//                 className="layoutli"
//                 activeClassName="active"
//                 onClick={handleClick}
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//           <div className="nav-icon" onClick={handleClick}>
//             <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
//           </div>
//         </div>
//       </div>
//       <main>
//         <h1>{pageTitle}</h1>
//         {children}
//       </main>
//     </div>
//   );
// };

// export default Layout;
