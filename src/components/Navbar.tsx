// // src/components/Navbar.tsx
// import React from 'react';
// import { Link, NavLink } from 'react-router-dom'; // Use NavLink for active styling
// import { Package, User } from 'lucide-react';

// export const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo and Home Link */}
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center space-x-2">
//               <Package className="h-8 w-8 text-indigo-600" />
//               <span className="text-xl font-bold text-gray-900">Rukmini Enterprises</span>
//             </Link>
//           </div>

//           {/* Navigation Links */}
//           <div className="flex items-center space-x-4">
//             {/* NavLinks will apply an 'active' class when the route is active */}
//             <NavLink
//               to="/products"
//               className={({ isActive }) =>
//                 isActive
//                   ? 'text-indigo-600 px-3 py-2 rounded-md text-sm font-medium'
//                   : 'text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium'
//               }
//             >
//               Products
//             </NavLink>

//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 isActive
//                   ? 'text-indigo-600 px-3 py-2 rounded-md text-sm font-medium'
//                   : 'text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium'
//               }
//             >
//               About Us
//             </NavLink>

// {/*             <NavLink
//               to="/gallery"
//               className={({ isActive }) =>
//                 isActive
//                   ? 'text-indigo-600 px-3 py-2 rounded-md text-sm font-medium'
//                   : 'text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium'
//               }
//             >
//               Gallery
//             </NavLink> */}

//             <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//                 isActive
//                   ? 'text-indigo-600 px-3 py-2 rounded-md text-sm font-medium'
//                   : 'text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium'
//               }
//             >
//               Contact
//             </NavLink>

//             <NavLink
//               to="/admin"
//               className={({ isActive }) =>
//                 isActive
//                   ? 'flex items-center space-x-1 bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium'
//                   : 'flex items-center space-x-1 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700'
//               }
//             >
//               <User className="h-4 w-4" />
//               <span>Admin</span>
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };












// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Package, User, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">Rukmini Enterprises</span>
            </Link>
          </div>

          {/* Hamburger for mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:text-indigo-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Nav Links for desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLinks />
          </div>
        </div>

        {/* Nav Links for mobile */}
        {isOpen && (
          <div className="md:hidden mt-2 flex flex-col space-y-2 pb-4">
            <NavLinks mobile />
          </div>
        )}
      </div>
    </nav>
  );
};

type NavLinksProps = {
  mobile?: boolean;
};

const NavLinks = ({ mobile = false }: NavLinksProps) => {
  const baseClass = 'px-3 py-2 rounded-md text-sm font-medium';
  const activeClass = 'text-indigo-600';
  const inactiveClass = 'text-gray-700 hover:text-indigo-600';

  const getClass = (isActive: boolean) =>
    `${isActive ? activeClass : inactiveClass} ${baseClass}`;

  return (
    <>
      <NavLink to="/products" className={({ isActive }) => getClass(isActive)}>
        Products
      </NavLink>

      <NavLink to="/about" className={({ isActive }) => getClass(isActive)}>
        About Us
      </NavLink>

      <NavLink to="/contact" className={({ isActive }) => getClass(isActive)}>
        Contact
      </NavLink>

      <NavLink
        to="/admin"
        className={({ isActive }) =>
          isActive
            ? 'flex items-center space-x-1 bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium'
            : 'flex items-center space-x-1 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700'
        }
      >
        <User className="h-4 w-4" />
        <span>Admin</span>
      </NavLink>
    </>
  );
};

