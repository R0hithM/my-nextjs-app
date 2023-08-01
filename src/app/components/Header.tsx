// import React from "react";
// import Link from "next/link";

// const Header: React.FC = () => {
//   return (
//     <header className="bg-blue-500 p-4">
//       <div className="flex items-center justify-between">
//         <div className="text-white text-2xl">
//           <Link href="/">
//             <a>Books</a>
//           </Link>
//         </div>
//         {/* Insert your hamburger menu here */}
//       </div>
//     </header>
//   );
// };

// export default Header;
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        {/* Use Next.js Link component without <a> */}
        <Link href="/">
          <div className="text-white text-2xl cursor-pointer">Books</div>
        </Link>
        {/* Insert your hamburger menu here */}
      </div>
    </header>
  );
};

export default Header;
