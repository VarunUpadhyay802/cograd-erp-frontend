// Card.js
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // If using React Router

const Card = ({ link, title, subtext, children }) => {
  return (
    <motion.div
      className="border border-gray-200 rounded-lg shadow p-4 sm:w-1/2 md:w-1/3 lg:w-1/4"
      whileHover={{ scale: 1.03 }} 
    >
      {link ? (
        <Link to={link} className="block no-underline">
          <h2 className=" text-xl  lg:text-2xl font-bold text-gray-900">{title}</h2>
        </Link>
      ) : (
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      )}

      {subtext && (
        <p className="text-13 lg:text-15 text-gray-500 mt-3">{subtext}</p>
      )}  

      <div className="mt-2 text-gray-700">{children}</div>
    </motion.div>
  );
};

export default Card;