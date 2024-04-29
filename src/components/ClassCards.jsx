/* eslint-disable react/prop-types */
import React from 'react';

const ClassCards = ({ classesList }) => {
  return (
    <>
      {classesList.map((item, index) => (
        <div
          key={index}
          className="
          p-6 sm:p-8 max-w-xs  bg-white border border-gray-200 rounded-lg shadow-sm"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {item.className}
          </h2>
          <p className="text-gray-600">Class Teacher: (Not yet assigned)</p>
          <button
            className="
              mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            View Details
          </button>
        </div>
      ))}
    </>
  );
};

export default ClassCards;
