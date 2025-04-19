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


















/////////////////            letest befor           ////////////////////////////////////////////////////
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
//                 Hit the Product Page
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
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-200 flex items-center justify-center overflow-hidden font-sans">
      
      {/* Floating Animated Blobs */}
      <div className="absolute w-[30rem] h-[30rem] bg-pink-400 rounded-full opacity-30 blur-3xl animate-spin-slow -top-40 -left-32 z-0"></div>
      <div className="absolute w-[30rem] h-[30rem] bg-indigo-400 rounded-full opacity-30 blur-3xl animate-spin-reverse -bottom-40 -right-32 z-0"></div>

      {/* Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 backdrop-blur-2xl bg-white/60 border border-white/20 shadow-2xl rounded-3xl px-10 py-16 max-w-3xl text-center"
      >
        {/* Company Name with gradient text */}
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-4 drop-shadow-lg"
        >
          Rukmini Enterprises
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl font-medium text-gray-800 mb-4"
        >
          Discover Our Premium Product Collection
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-md text-gray-600 leading-relaxed mb-10"
        >
          Curated with precision, every product reflects excellence. Dive into a world of luxury and hand-picked quality just for you.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/products"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg transition-all duration-300"
          >
            Explore Products
          </Link>
          <Link
            to="/admin"
            className="flex items-center justify-center text-sm font-medium text-gray-800 hover:underline"
          >
            Admin Login <span className="ml-1">→</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};







// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// export const Home = () => {
//   return (
//     <div className="bg-white overflow-hidden h-screen flex flex-col justify-center font-sans">
//       <div className="relative isolate px-4 lg:px-8 h-full w-full z-0">

//         {/* Background Image Layer */}
//         <div
//           className="absolute inset-0 -z-20 bg-cover bg-center opacity-0"
//           style={{ backgroundImage: `url('https://images.unsplash.com/photo-1636348265968-7cebf59b03fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHNvbWUlMjBlbmdpbmVlcmluZyUyMGJyaWdodCUyMGxpZ2h0JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D')` }}
//         ></div>

//         {/* Top Background Effect */}
//         <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
//           <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem]
//             -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]
//             opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
//         </div>

//         {/* Main Content */}
//         <div className="flex flex-col items-center justify-center h-full gap-6 max-w-5xl mx-auto text-center">

//           {/* Title */}
//           <div>
//             <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-black-900">
//               Rukmini Enterprises
//             </h1>
//             <p className="mt-4 text-base sm:text-lg text-gray-600">
//               Forging Strength Since 1997 – Trusted Electrodes, Trusted Performance
//             </p>
//           </div>

//           {/* Slider Section */}
//           <div className="w-full max-w-3xl border-2 border-red-900 rounded-xl shadow-lg">
//             <Swiper
//               modules={[Autoplay, Pagination]}
//               spaceBetween={20}
//               pagination={{ clickable: true }}
//               autoplay={{ delay: 3000, disableOnInteraction: false }}
//               loop={true}
//               className="rounded-lg"
//             >
//               <SwiperSlide>
//                 <img
//                   src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGRpc2NvdW50fGVufDB8fDB8fHww"
//                   alt="Offer 1"
//                   className="w-full h-56 sm:h-72 object-cover rounded-lg"
//                 />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img
//                   src="https://plus.unsplash.com/premium_photo-1728566737814-bac7f3353154?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGRpc2NvdW50fGVufDB8fDB8fHww"
//                   alt="Offer 2"
//                   className="w-full h-56 sm:h-72 object-cover rounded-lg"
//                 />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img
//                   src="https://plus.unsplash.com/premium_photo-1728670182314-a8aefbb9d53c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGRpc2NvdW50fGVufDB8fDB8fHww"
//                   alt="Offer 3"
//                   className="w-full h-56 sm:h-72 object-cover rounded-lg"
//                 />
//               </SwiperSlide>
//             </Swiper>
//           </div>

//           {/* Description & Buttons */}
//           <div>
//             <p className="mt-4 text-sm sm:text-base text-gray-600">
//               Delivering BIS-certified welding excellence – brands like Pilot, Marshal, Supersparc, and Maharaja,
//               <br /> crafted for unmatched performance across India.
//             </p>
//             <div className="mt-6 flex justify-center gap-x-6">
//               <Link
//                 to="/products"
//                 className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition"
//               >
//                 View Products
//               </Link>
//               <Link
//                 to="/admin"
//                 className="text-sm font-semibold leading-6 text-gray-900 flex items-center hover:underline"
//               >
//                 Admin Login <span aria-hidden="true" className="ml-1">→</span>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Background Effect */}
//         <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
//           <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] 
//             -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 
//             sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
//         </div>
//       </div>
//     </div>
//   );
// };







// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// export const Home = () => {
//   return (
//     <div className="bg-white min-h-screen">
//       {/* Hero Poster Section */}
//       <div className="relative h-[80vh] w-full overflow-hidden">
//         <motion.img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3LBPj_gJGnOItwgODBM8v94fJ1KTsyr55og&s" // 🖼️ Replace with your poster URL
//           alt="Hero Poster"
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 2 }}
//           className="object-cover w-full h-full"
//         />

//         {/* Overlay content */}
//         <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
//           <h1 className="text-white text-4xl sm:text-6xl font-bold mb-4">
//             Discover Excellence with Rukmini Enterprises
//           </h1>
//           <p className="text-white text-lg sm:text-xl max-w-2xl">
//             Premium products tailored to your lifestyle. Experience the difference.
//           </p>
//           <div className="mt-6 flex gap-4">
//             <Link
//               to="/products"
//               className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 transition"
//             >
//               Explore Products
//             </Link>
//             <Link
//               to="/admin"
//               className="text-sm font-semibold text-white hover:underline flex items-center"
//             >
//               Admin Login →
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Optional Section Below Hero */}
//       <div className="text-center mt-20 px-6">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//           Welcome to Rukmini Enterprises
//         </h2>
//         <p className="text-gray-600 max-w-xl mx-auto">
//           We offer a curated collection of quality products backed by exceptional service.
//         </p>
//       </div>
//     </div>
//   );
// };

