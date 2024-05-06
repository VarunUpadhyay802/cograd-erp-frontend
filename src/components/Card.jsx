import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Card = ({ link, title, subtext, image, children }) => {
  return (
    <motion.div
      className=" border overflow-hidden eborder-gray-200 rounded-lg shadow p-4 sm:w-1/2 md:w-1/3 lg:w-1/4  flex flex-col justify-between"
      whileHover={{ scale: 1.03 }}
    >
      {link ? (
        <Link to={link} className="block no-underline">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-16 h-16 object-cover rounded-md mb-2 mx-auto" // Centered and consistent image size
            />
          )}
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 text-center">{title}</h2>
        </Link>
      ) : (
        <>
          {image && (
            <img
              src={image}
              alt={title}
              className="w-16 h-16 object-cover rounded-md mb-2 mx-auto" // Centered and consistent image size
            />
          )}
          <h2 className="text-xl font-bold text-gray-900 text-center">{title}</h2>
        </>
      )}

      {subtext && (
        <p className="text-sm lg:text-base text-gray-500 mt-3 text-center">{subtext}</p> // Centered text
      )}

      <div className="mt-2 text-gray-700 flex-grow text-center">{children}</div> 
    </motion.div>
  );
};

export default Card;
