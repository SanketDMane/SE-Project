// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import { Product } from '../types';

// interface ProductCardProps {
//   product: Product;
// }

// export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden">
//       <img
//         src={product.imageUrl}
//         alt={product.name}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
//         <p className="mt-1 text-gray-500">{product.description}</p>
//         <div className="mt-4 flex items-center justify-between">
//           <span className="text-lg font-bold text-indigo-600">
//             Rs {product.price}
//           </span>
//           <Link
//             to={`/products/${product.id}`}
//             className="flex items-center text-indigo-600 hover:text-indigo-700"
//           >
//             View Details
//             <ArrowRight className="ml-1 h-4 w-4" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };













// /////////////////////////////////////////////     orignal ////////////////////////////////////////////
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import { Product } from '../types';

// interface ProductCardProps {
//   product: Product;
// }

// export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
//       <img
//         src={product.imageUrl}
//         alt={product.name}
//         className="w-full h-48 object-cover"
//       />
      
//       {/* Body: flex-grow ensures this fills the space above footer */}
//       <div className="p-4 flex flex-col flex-grow">
//         <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
//         <p className="mt-1 text-gray-500 flex-grow">{product.description}</p>
        
//         {/* Footer: always at the bottom */}
//         <div className="mt-4 flex items-center justify-between">
//           <span className="text-lg font-bold text-indigo-600">
//             Rs {product.price}
//           </span>
//           <Link
//             to={`/products/${product.id}`}
//             className="flex items-center text-indigo-600 hover:text-indigo-700"
//           >
//             View Details
//             <ArrowRight className="ml-1 h-4 w-4" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };


////////////////////////////////////////////// responsive //////////////////////////////////////
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>

        {/* Description: hidden on mobile, visible with original font on sm+ */}
        <p className="mt-1 text-gray-500 flex-grow text-base hidden sm:block">
          {product.description}
        </p>
      </div>

      {/* Price and View Details */}
      <div className="flex justify-between items-center mt-auto p-4 pt-0">
        <span className="text-lg font-bold text-indigo-600">
          Rs {product.price}
        </span>
        <Link
          to={`/products/${product.id}`}
          className="flex items-center text-indigo-600 hover:text-indigo-700"
        >
          View Details
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

