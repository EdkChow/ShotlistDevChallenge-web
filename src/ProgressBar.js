import React from 'react';

const ProgressBar = ({ color, onboardingState, numOnboardingPages }) => {

  const containerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const barStyles = {
    border: `1px solid ${color}`,
    backgroundColor: color,
    width: `${80 / (numOnboardingPages + 1)}%`,
    height: '1px',
    borderRadius: '5px',
  };

  const selectedBarStyles = {
    border: `1px solid ${color}`,
    backgroundColor: color,
    width: `${(80 / (numOnboardingPages + 1)) * 2}%`,
    height: '4px',
    borderRadius: '5px',
  };

  const bar = [];

  (() => {
    for (let i = 1; i <= numOnboardingPages; i += 1) {
      bar.push(
        <div
          key={'bar' + i}
          style={(() => onboardingState === i ? selectedBarStyles : barStyles)()}
        >
        </div>
      )
    }
  })();

  return (
    <div style={containerStyles}>
      {bar}
    </div>
  );
  
};

export default ProgressBar;
