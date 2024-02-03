import React from 'react';
import FeatureBookCard from './FeatureBookCard';
import SmallBookCard from './SmallBookCard';

const RighteousReading = () => {
  return (
    <div className="righteous-reading-container">
      <FeatureBookCard />
      <div className="sm:flex justify-between">
        <SmallBookCard />
      </div>
    </div>
  );
};

export default RighteousReading;
