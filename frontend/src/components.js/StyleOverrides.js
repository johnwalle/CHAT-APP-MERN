import React from "react";

const StyleOverrides = () => {
  return (
    <style>
      {`
        @layer utilities {
          .hide-scrollbar::-webkit-scrollbar {
            width: 5px;
          }

          .hide-scrollbar::-webkit-scrollbar-track {
            background-color: #1a202c; /* Set the background color similar to the background */
          }

          .hide-scrollbar::-webkit-scrollbar-thumb {
            background-color: #4a5568; /* Set the thumb color similar to the background */
            border-radius: 2.5px; /* Make the thumb rounded */
          }

          .hide-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: #cbd5e1; /* Set the thumb color on hover */
          }

          .hide-scrollbar::-webkit-scrollbar-thumb:active {
            background-color: #a0aec0; /* Set the thumb color when active */
          }
        }
      `}
    </style>
  );
};

export default StyleOverrides;