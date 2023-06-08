/* eslint-disable react/prop-types */
// import React from 'react';

const Button = ({ text}) => {
  return (
    <button  className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
      {text}
    </button>
  );
};



export default Button