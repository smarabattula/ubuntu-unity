import React from 'react';


const SectionContainer = ({ children, hasNav }) => {
  const containerClass = hasNav ? 'section-container-with-nav' : 'section-container';

  return <div className= {containerClass}>{children}</div>;
};

export default SectionContainer;
