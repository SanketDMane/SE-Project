// import React from 'react';
// import { Link } from 'react-router-dom';

// export const Home = () => {
//   return (
//     <div className="bg-white">
//       <div className="relative isolate px-6 pt-14 lg:px-8">
//         <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
//           <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
//         </div>
//         <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//               Discover Our Premium Product Collection
//             </h1>
//             <p className="mt-6 text-lg leading-8 text-gray-600">
//               Explore our curated selection of high-quality products designed to meet your needs.
//               Each item is carefully selected to ensure the best experience for our customers.
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6">
//               <Link
//                 to="/products"
//                 className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 View Products
//               </Link>
//               <Link
//                 to="/admin"
//                 className="text-sm font-semibold leading-6 text-gray-900 flex items-center"
//               >
//                 Admin Login <span aria-hidden="true" className="ml-1">→</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
//           <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
//         </div>
//       </div>
//     </div>
//   );
// };




















// import React from 'react';
// import { Link } from 'react-router-dom';

// export const Home = () => {
//   return (
//     <div className="bg-white">
//       <div className="relative isolate px-6 pt-14 lg:px-8">
//         {/* Top Background Effect */}
//         <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
//           <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] 
//           -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] 
//           opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
//         </div>

//         {/* Company Name */}
//         <div className="text-center pt-10">
//           <h2 className="text-3xl font-extrabold text-indigo-600">Rukmini Enterprises</h2>
//         </div>

//         {/* Main Section */}
//         <div className="mx-auto max-w-2xl py-20 sm:py-32 lg:py-40">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//               Discover Our Premium Product Collection
//             </h1>
//             <p className="mt-6 text-lg leading-8 text-gray-600">
//               Explore our curated selection of high-quality products designed to meet your needs.
//               Each item is carefully selected to ensure the best experience for our customers.
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6">
//               <Link
//                 to="/products"
//                 className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Hit the Home Page
//               </Link>
//               <Link
//                 to="/admin"
//                 className="text-sm font-semibold leading-6 text-gray-900 flex items-center"
//               >
//                 Admin Login <span aria-hidden="true" className="ml-1">→</span>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Background Effect */}
//         <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
//           <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] 
//           -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 
//           sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
//         </div>
//       </div>
//     </div>
//   );
// };





import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative isolate px-6 pt-14 lg:px-8 overflow-hidden">
        {/* Top Background Effect */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] 
            -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] 
            opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        {/* Company Name */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-center pt-10"
        >
          <h2 className="text-3xl font-extrabold text-indigo-600">Rukmini Enterprises</h2>
        </motion.div>

        {/* Hero Section with Slide-In */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
          className="mx-auto max-w-2xl py-20 sm:py-32 lg:py-40"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Discover Our Premium Product Collection
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our curated selection of high-quality products designed to meet your needs.
              Each item is carefully selected to ensure the best experience for our customers.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/products"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all duration-300"
              >
                Hit the Home Page
              </Link>
              <Link
                to="/admin"
                className="text-sm font-semibold leading-6 text-gray-900 flex items-center hover:underline"
              >
                Admin Login <span aria-hidden="true" className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Bottom Background Effect */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] 
            -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 
            sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>
    </div>
  );
};
