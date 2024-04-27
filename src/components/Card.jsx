
/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'; // If using React Router

const Card = ({ link, title, children }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow p-4 hover:bg-gray-100 sm:w-1/2 md:w-1/3 lg:w-1/4">
      {link ? (
        <Link to={link} className="block no-underline">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        </Link>
      ) : (
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      )}

      <div className="mt-2 text-gray-700  bg-red">
        {children} {/* This will display any children passed to the component */}
      </div>
    </div>
  );
};

export default Card;