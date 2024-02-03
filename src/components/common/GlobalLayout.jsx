// GlobalLayout.jsx
import React from 'react';


const GlobalLayout = ({ children }) => {
  return (
    <div className="global-container min-h-screen bg-[#E97451]">
      {children}
    </div>
  );
};

export default GlobalLayout;
